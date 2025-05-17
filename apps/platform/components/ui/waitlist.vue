<script setup lang="ts">
import { useWaitlist } from '@/composables/useWaitlist';

const { waitlist_modal } = useWaitlist();
</script>

<template>
    <dialog ref="waitlist_modal" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
        </div>

        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>