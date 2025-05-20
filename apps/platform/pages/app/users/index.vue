<script setup>
definePageMeta({
    layout: 'dashboard'
})

const apiClient = useApi()

const { data: users, pending: usersPending } = await useLazyAsyncData('users', async () => {
    const req = await apiClient.api.users.list.$get()
    return req.json()
})
</script>

<template>
    <div class="grid grid-cols-6 gap-4">
        <div class="col-span-6">
            <AppTitle>Users</AppTitle>
        </div>

        <div class="card bg-white shadow shadow-base-200 col-span-6">
            <div class="card-body p-0">
                <div class="overflow-x-auto">
                    <table class="table table-zebra">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th></th>
                                <th>User</th>
                                <th>External ID</th>
                                <th>Created</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="usersPending">
                                <td colspan="7" class="text-center py-4">Loading...</td>
                            </tr>
                            <tr v-else-if="!users || users.length === 0">
                                <td colspan="7" class="text-center py-4">No users found</td>
                            </tr>
                            <template v-else>
                                <NuxtLink v-for="(user, index) in users" :key="user.id" :to="`/app/users/${user.id}`"
                                    custom v-slot="{ navigate }">
                                    <tr @click="navigate" class="cursor-pointer hover:bg-base-200/70">
                                        <th>{{ index + 1 }}</th>
                                        <td class="flex items-center gap-2">
                                            <div class="avatar">
                                                <div class="w-8 rounded-full">
                                                    <img v-if="user.avatar" :src="user.avatar"
                                                        :alt="user.name || 'User avatar'" />
                                                    <div v-else
                                                        class="bg-base-300 size-6 rounded-full flex items-center justify-center">
                                                        {{ (user.name || 'U').charAt(0).toUpperCase() }}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium">{{ user.name || 'N/A' }}</span>
                                                <span class="text-xs">{{ user.email || 'N/A' }}</span>
                                            </div>
                                        </td>
                                        <td class="text-xs whitespace-nowrap">{{ user.externalId || 'N/A' }}</td>
                                        <td class="text-xs">{{ new Date(user.createdAt).toLocaleDateString() }}</td>
                                        <td class="text-xs">{{ new Date(user.updatedAt).toLocaleDateString() }}</td>
                                    </tr>
                                </NuxtLink>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>