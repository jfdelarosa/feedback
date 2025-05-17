const waitlist_modal = ref<HTMLDialogElement | null>(null);

export const useWaitlist = () => {
    function showWaitlistModal() {
        if (!waitlist_modal.value) {
            return;
        }

        waitlist_modal.value.showModal();
    }

    return {
        waitlist_modal,
        showWaitlistModal
    };
};