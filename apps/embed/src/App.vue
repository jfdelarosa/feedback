<script setup lang="ts">
import Board from '@/components/Board.vue';
import Kanban from '@/components/Kanban.vue';

// Config values - in a real app, these would be loaded from environment or props
const projectId = '019713b1-3e7f-7000-b38f-45484ce56503'; // UUID for the project

// User information
const user = JSON.stringify({
  externalId: '0197187b-9a49-7000-8a42-ea62e0050ad7',
  email: 'test@test.com',
  name: 'Test User',
  avatar: 'https://avatar.iran.liara.run/public/20',
});
</script>

<template>
  <div class="w-screen h-screen bg-sky-100 overflow-y-auto p-4">
    <div class="max-w-5xl w-full mx-auto">
      <Board :project-id="projectId" :user="user" />
      <!-- <Kanban :project-id="projectId" /> -->
    </div>
  </div>
</template>