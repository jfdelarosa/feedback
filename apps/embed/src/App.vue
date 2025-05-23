<script setup lang="ts">
import Board from '@/components/Board.vue';

// Config values - in a real app, these would be loaded from environment or props
const projectId = '0196f1bf-e676-7000-a8e1-9a3c1c550520'; // UUID for the project

// User information
const user = JSON.stringify({
  externalId: '0196ea24-fdd6-7000-bb99-c6f5493fc681',
  email: 'test@test.com',
  name: 'Test User',
  avatar: 'https://avatar.iran.liara.run/public/20',
});
</script>

<template>
  <div class="w-screen h-screen bg-sky-100 overflow-y-auto">
    <div class="max-w-md w-full mx-auto">
      <Board :project-id="projectId" :user="user" />
    </div>
  </div>
</template>