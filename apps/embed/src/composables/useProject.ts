import { ref } from 'vue'
import { useState } from './useState'
import type { Project } from '@/types'
import { useRequest } from '@/lib/sdk'

const project = ref<Project | null>(null)

export function useProject() {
    const { projectId } = useState()

    const loading = ref(false)
    const error = ref<string | null>(null)
    const request = useRequest();

    async function loadProject() {
        if (!projectId.value) {
            error.value = 'No project ID provided'
            return
        }

        loading.value = true
        error.value = null

        try {
            const data = await request('/project')

            project.value = data

            return project
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'An unknown error occurred'
            console.error('Error loading project:', err)
        } finally {
            loading.value = false
        }
    }

    return {
        project,
        loading,
        error,
        loadProject
    }
} 