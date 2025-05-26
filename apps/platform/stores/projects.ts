import type { InferResponseType } from "hono/client";
import { defineStore } from "pinia";

type Projects = InferResponseType<typeof client.api.projects.$get>;

export const useProjectsStore = defineStore("projects", () => {
	const client = useApi();
	const projects = ref<Projects>([]);
	const activeProjectId = ref<string | null>(null);
	const isLoading = ref(true);
	const isInitialized = ref(false);

	const activeProject = computed(() => {
		return projects.value.find(project => project.id === activeProjectId.value) || null;
	});

	async function initialize(currentProjectId: string | null = null) {
		if (isInitialized.value)
			return;

		try {
			isLoading.value = true;
			const projectsResponse = await client.api.projects.$get();
			const apiProjects = await projectsResponse.json();

			projects.value = apiProjects;

			console.log("apiProjects", apiProjects);

			if (currentProjectId) {
				activeProjectId.value = currentProjectId;
			}
			else {
				activeProjectId.value = apiProjects[0].id;
			}
		}
		catch (error) {
			console.error("Failed to initialize projects store:", error);
		}
		finally {
			isLoading.value = false;
			isInitialized.value = true;
		}
	}

	function changeActiveProject(projectId: string) {
		activeProjectId.value = projectId;
	}

	return {
		activeProject,
		activeProjectId,
		changeActiveProject,
		initialize,
		isInitialized,
		isLoading,
		projects,
	};
});
