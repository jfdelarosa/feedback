import type { InstructionStep } from "./types";

export const steps: InstructionStep[] = [
  {
    description: 'Create a plugin file in <AppInlineCode>plugins/pulsekit.client.ts</AppInlineCode>:',
    code: `// plugins/pulsekit.client.ts
export default defineNuxtPlugin(() => {
  const script = document.createElement('script')
  script.src = 'https://trypulsekit.com/embed.js'
  script.onload = () => {
    if (window.pulsekit) {
      window.pulsekit.init("PROJECT_KEY")
    }
  }
  document.head.appendChild(script)

  return {
    provide: {
      identifyUser: (user: { id: string; email?: string }) => {
        if (window.pulsekit) {
          window.pulsekit.identify(user)
        } else {
          console.warn("pulsekit not loaded yet")
        }
      }
    }
  }
})`
  },
  {
    description: 'Alternatively, you can use the <AppInlineCode>useHead</AppInlineCode> composable in your <AppInlineCode>app.vue</AppInlineCode>:',
    code: `<script setup>
useHead({
  script: [
    {
      src: 'https://trypulsekit.com/embed.js',
      onload: "if (window.pulsekit) window.pulsekit.init('PROJECT_KEY')"
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
    description: 'Create a composable in <AppInlineCode>composables/usePulsekit.ts</AppInlineCode> to make integration easier:',
    code: `// composables/usePulsekit.ts
export const usePulsekit = () => {
  const identifyUser = (user: { id: string; email?: string }) => {
    if (typeof window !== "undefined" && window.pulsekit) {
      window.pulsekit.identify(user)
    } else {
      console.warn("pulsekit not loaded yet")
    }
  }

  return {
    identifyUser
  }
}`
  },
  {
    description: 'Now you can use it in any component to identify users after login:',
    code: `<script setup>
const { $identifyUser } = useNuxtApp() // If using the plugin
// OR
const { identifyUser } = usePulsekit() // If using the composable

const user = useUser() // Your user state

watchEffect(() => {
  if (user.value) {
    identifyUser({ id: user.value.id, email: user.value.email })
    // OR if using the plugin
    // $identifyUser({ id: user.value.id, email: user.value.email })
  }
})
</script>`
  }
] 