import type { Organization } from "better-auth/plugins/organization";
import { auth } from "@/lib/auth";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useProjectsStore } from "./projects";

export const useAuthStore = defineStore("auth", () => {
	const projectStore = useProjectsStore();
	const session = ref<typeof auth.$Infer.Session | null>(null);
	const organizations = ref<typeof auth.$Infer.Organization[]>([]);
	const isLoading = ref(true);
	const isInitialized = ref(false);

	const isAuthenticated = computed(() => !!session.value);
	const hasOrganizations = computed(() => organizations.value.length > 0);
	const activeOrganization = ref<Organization | null>(null);

	async function initialize() {
		if (isInitialized.value)
			return;

		try {

			isLoading.value = true;
			const sessionResponse = await auth.getSession();


			if (!sessionResponse.data) {
				// If the user is not authenticated, we don't need to initialize the store
				return;
			}

			const orgsResponse = await auth.organization.list();


			console.log(orgsResponse)

			session.value = sessionResponse.data;
			organizations.value = orgsResponse.data || [];
			activeOrganization.value = organizations.value.find((org) => {
				return org.id === sessionResponse.data?.session.activeOrganizationId;
			}) || null;

			await projectStore.initialize(session.value?.session.activeProjectId);
		}
		catch (error) {
			console.error("Failed to initialize auth store:", error);
			session.value = null;
			organizations.value = [];
		}
		finally {
			isLoading.value = false;
			isInitialized.value = true;
		}
	}

	async function setActiveOrganization(organizationId: string) {
		try {
			const response = await auth.organization.setActive({ organizationId });
			if (session.value) {
				session.value = {
					...session.value,
					session: {
						...session.value.session,
						activeOrganizationId: organizationId,
					},
				};
			}
			activeOrganization.value = organizations.value.find(org => org.id === organizationId) || null;
			return response;
		}
		catch (error) {
			console.error("Failed to set active organization:", error);
			throw error;
		}
	}

	async function logout() {
		await auth.signOut();
	}

	function reset() {
		session.value = null;
		organizations.value = [];
		isInitialized.value = false;
	}

	return {
		activeOrganization,
		hasOrganizations,
		// actions
		initialize,
		// getters
		isAuthenticated,
		isInitialized,
		isLoading,
		logout,
		organizations,
		reset,
		// state
		session,
		setActiveOrganization,
	};
});
