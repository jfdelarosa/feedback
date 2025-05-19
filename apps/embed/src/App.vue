<script setup lang="ts">
import * as SDK from '@/lib/sdk'
import Board from '@/components/Board.vue'

SDK.init('f9475d9f-c4f4-41b7-9531-c92b7525d262')

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