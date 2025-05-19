<script setup lang="ts">
import * as SDK from '@/lib/sdk'
import Board from '@/components/Board.vue'

SDK.init('0196e9f8-86a4-7000-98c9-9871b50d2909')

SDK.identify({
  id: '123',
  email: 'test@test.com',
  name: 'Test User',
  avatar: 'https://example.com/avatar.png',
})
</script>

<template>
  <div class="max-w-md w-full mx-auto">
    <Board />
  </div>
</template>