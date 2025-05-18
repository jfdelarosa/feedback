import type { InstructionStep } from "./types";

export const steps: InstructionStep[] = [
    {
        description: 'Load and initialize the script:',
        code: `<script src="https://trypulsekit.com/sdk.js"></script>
<script>
    window.pulsekit.init("PROJECT_KEY");
</script>`
    },
    {
        description: 'Create a small utility wrapper:',
        code: `export const identifyUser = (user: { id: string; email?: string }) => {
    if (typeof window !== "undefined" && window.pulsekit) {
        window.pulsekit.identify(user);
    } else {
        console.warn("pulsekit not loaded yet");
    }
};`
    },
    {
        description: 'Now you can call <AppInlineCode>identifyUser</AppInlineCode> whenever your app has user info (after login, or when session is ready).',
        code: `import { identifyUser } from "@/lib/pulsekit";  

function load(user) {
    identifyUser({ id: user.id, email: user.email });
}`
    }
]