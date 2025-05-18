import type { InstructionStep } from "./types";

export const steps: InstructionStep[] = [
    {
        description: 'Add the script to your root layout <AppInlineCode>src/routes/+layout.svelte</AppInlineCode>:',
        code: `<script lang="ts">
  import { onMount } from 'svelte';
  
  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://trypulsekit.com/embed.js';
    script.onload = () => {
      if (window.pulsekit) {
        window.pulsekit.init("PROJECT_KEY");
      }
    };
    document.head.appendChild(script);
  });
</script>

<slot />
`
    },
    {
        description: 'Create a reusable store in <AppInlineCode>src/lib/pulsekit.ts</AppInlineCode>:',
        code: `// src/lib/pulsekit.ts
import { browser } from '$app/environment';

export const identifyUser = (user: { id: string; email?: string }) => {
  if (browser && window.pulsekit) {
    window.pulsekit.identify(user);
  } else if (browser) {
    console.warn("pulsekit not loaded yet");
  }
};
`
    },
    {
        description: 'For TypeScript support, add type definitions in <AppInlineCode>src/app.d.ts</AppInlineCode>:',
        code: `// src/app.d.ts
/// <reference types="svelte" />

declare global {
  interface Window {
    pulsekit?: {
      init: (apiKey: string) => void;
      identify: (user: { id: string; email?: string }) => void;
    }
  }
}

export {};
`
    },
    {
        description: 'Now you can use it in any component after user authentication:',
        code: `<script lang="ts">
  import { onMount } from 'svelte';
  import { identifyUser } from '$lib/pulsekit';
  import { user } from '$lib/stores/auth'; // Your user store
  
  onMount(() => {
    // If user is already authenticated
    if ($user) {
      identifyUser({ id: $user.id, email: $user.email });
    }
  });
  
  // Or reactively when user changes
  $: if ($user) {
    identifyUser({ id: $user.id, email: $user.email });
  }
</script>
`
    }
] 