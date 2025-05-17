<script setup lang="ts">
import { Waitlist } from '@clerk/vue';

const { waitlistModal } = useWaitlist()
</script>

<template>
    <dialog ref="waitlistModal" class="modal">
        <div class="modal-box p-0 w-auto">
            <Waitlist />
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>