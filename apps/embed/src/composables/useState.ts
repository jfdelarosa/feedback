import { ref } from "vue"
import type { PulseKitUser } from "@/types"

const user = ref<PulseKitUser | null>(null)
const projectId = ref<string | null>(null)

export function useState() {

    function setProjectId(id: string | null) {
        projectId.value = id
    }

    function setUser(u: PulseKitUser | null) {
        user.value = u
    }

    return {
        user,
        projectId,
        setProjectId,
        setUser,
    }
}