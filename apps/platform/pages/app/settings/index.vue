<script setup lang="ts">
import { toast } from 'vue-sonner'

const apiClient = useApi()

definePageMeta({
    layout: 'dashboard'
})

const Theme = [
    'LIGHT',
    'DARK',
    'CUPCAKE',
    'SYNTHWAVE',
    'RETRO',
    'CYBERPUNK',
    'VALENTINE',
    'HALLOWEEN',
    'GARDEN',
    'PASTEL',
    'FANTASY',
    'WIREFRAME',
    'BLACK',
    'LUXURY',
    'BUSINESS',
    'ACID',
    'LEMONADE',
    'NIGHT',
    'COFFEE',
    'WINTER',
    'ABYSS',
    'SILK',
    'CARAMELLATTE',
    'SUNSET',
    'NORD',
    'DIM',
];

const selectedTheme = ref(null)
const projectName = ref('')
const isSaving = ref(false)
const saveMessage = ref('')

const { data: project, pending: projectPending, refresh } = useLazyAsyncData('project', async () => {
    const req = await apiClient.api.projects[":id"].$get({
        param: {
            id: 'current'
        }
    })

    const project = await req.json()

    selectedTheme.value = project.theme.toLowerCase()
    projectName.value = project.name

    return project
})

const saveSettings = async () => {
    if (!project.value) return

    isSaving.value = true
    saveMessage.value = ''

    try {
        const req = await apiClient.api.projects[":id"].$patch({
            param: {
                id: project.value.id
            },
            json: {
                name: projectName.value,
                theme: selectedTheme.value || "light"
            }
        })

        await req.json()

        toast.success('Settings saved successfully')
        refresh()
    } catch (error) {
        console.error('Error saving settings:', error)
        toast.error('Error saving settings')
    } finally {
        isSaving.value = false
    }
}
</script>



<template>
    <div class="space-y-4">
        <AppTitle>Settings</AppTitle>

        <div class="card shadow shadow-base-200 bg-white col-span-3">
            <div class="card-body">
                <h2 class="card-title text-secondary text-base">
                    General
                </h2>

                <div v-if="projectPending">
                    Loading...
                </div>

                <template v-else>
                    <form @submit.prevent="saveSettings" class="space-y-4">
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Project Name</legend>
                            <input type="text" class="input" placeholder="Type here" v-model="projectName" />
                        </fieldset>

                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Color theme</legend>

                            <select class="select" v-model="selectedTheme">
                                <option disabled selected>Pick a color</option>
                                <option v-for="color in Theme" :key="color" :value="color.toLowerCase()">
                                    {{ color.toLowerCase() }}
                                </option>
                            </select>
                        </fieldset>

                        <fieldset class="fieldset">
                            <legend class="fieldset-legend" v-if="selectedTheme">
                                Preview
                            </legend>

                            <AppTheme v-if="selectedTheme" :theme="selectedTheme" :name="selectedTheme" />
                        </fieldset>

                        <div class="flex items-center justify-between">
                            <button type="submit" class="btn btn-primary ml-auto" :disabled="isSaving">
                                <span class="loading loading-spinner" v-if="isSaving"></span>

                                Save Settings
                            </button>
                        </div>
                    </form>
                </template>
            </div>
        </div>
    </div>
</template>