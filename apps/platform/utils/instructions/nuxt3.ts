import type { InstructionStep } from "./types";

export const steps: InstructionStep[] = [
  {
    description: 'Add the script in <AppInlineCode>app.vue</AppInlineCode> using <AppInlineCode>useHead</AppInlineCode>:',
    code: `<script setup>
useHead({
  script: [
    {
      src: 'https://cdn.jsdelivr.net/gh/jfdelarosa/pulsekit@main/apps/embed/dist/pulsekit.js'
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>`
  },
  {
    description: 'Use the web component in any page:',
    code: `<script setup>
const user = useUser() // Your user composable
</script>

<template>
  <div>
    <h1>Feedback</h1>
    <!-- Use web component directly -->
    <pulse-feedback 
      projectId="PROJECT_KEY"
      :user="JSON.stringify(user)"
    />
  </div>
</template>`
  }
] 