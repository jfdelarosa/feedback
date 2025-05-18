<script setup lang="ts">
import { ChevronUp } from 'lucide-vue-next';

definePageMeta({
    layout: 'dashboard'
})


const newPosts = [
    {
        title: 'Add dark mode support',
        votes: 3,
    },
    {
        title: 'Change the color of the button',
        votes: 1,
    },
    {
        title: 'Improve mobile responsiveness',
        votes: 5,
    },
]
</script>

<template>

    <div class="grid grid-cols-6 gap-4">
        <div class="col-span-6">
            <AppTitle>Feedback</AppTitle>
        </div>

        <div class="card shadow shadow-base-200 bg-white col-span-3">
            <div class="card-body p-0">
                <h2 class="card-title pt-4 px-4 text-secondary">New Posts</h2>

                <ul class="list">
                    <li class="list-row items-center" v-for="post in newPosts" :key="post.title">
                        <div class="list-col-grow">
                            <a href="#" class="hover:underline">{{ post.title }}</a>
                        </div>
                        <div>
                            <button class="btn btn-ghost btn-sm flex flex-col gap-0 btn-square btn-lg">
                                <ChevronUp class="size-6" />
                                {{ post.votes }}
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>

<style scoped>
.list-row:after {
    left: 0;
    right: 0;
}
</style>