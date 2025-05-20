<script setup lang="ts">
const props = defineProps<{
    activeTab: string;
    isReadonly: boolean;
}>();

const emit = defineEmits<{
    (e: 'updateTab', tab: string): void;
}>();

function setTab(tab: string) {
    emit('updateTab', tab);
}
</script>

<template>
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold m-0">Feedback Board</h2>
        <div class="flex gap-2">
            <button class="btn btn-sm" :class="activeTab === 'all' ? 'btn-primary' : 'btn-ghost'"
                @click="setTab('all')">
                All Feedback
            </button>
            <button class="btn btn-sm" :class="activeTab === 'mine' ? 'btn-primary' : 'btn-ghost'"
                @click="setTab('mine')" :disabled="isReadonly" v-if="!isReadonly">
                My Feedback
            </button>
        </div>
    </div>
</template>