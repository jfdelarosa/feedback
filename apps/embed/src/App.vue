<script setup lang="ts">
import * as SDK from '@/lib/sdk'
import Board from '@/components/Board.vue'

SDK.init('0196e9f8-86a4-7000-98c9-9871b50d2909')

SDK.identify({
  externalId: '0196ea24-fdd6-7000-bb99-c6f5493fc681',
  email: 'test@test.com',
  name: 'Test User',
  avatar: 'https://avatar.iran.liara.run/public/20',
})
</script>

<template>
  <div class="max-w-md w-full mx-auto">
    <Board />
  </div>
</template>