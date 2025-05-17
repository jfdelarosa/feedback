const waitlistModal = ref<HTMLDialogElement | null>(null)

export const useWaitlist = () => {
    function openModal() {
        if (!waitlistModal.value) {
            return
        }

        waitlistModal.value.showModal()
    }

    return {
        openModal,
        waitlistModal
    }
}