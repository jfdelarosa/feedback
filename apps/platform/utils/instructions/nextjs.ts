import type { InstructionStep } from "./types";

export const steps: InstructionStep[] = [
  {
    description: 'Add the script to your <AppInlineCode>_app.tsx</AppInlineCode> (or <AppInlineCode>_app.js</AppInlineCode>) using <AppInlineCode>next/script</AppInlineCode>:',
    code: `import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://cdn.trypulsekit.com/widget.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;`
  },
  {
    description: 'Add the web component directly to any page:',
    code: `import { useUser } from "@/path/to/your/user-hook"; // Your user hook

export default function Feedback() {
  const { user } = useUser(); // Get user data from your auth system
  
  if (!user) return <div>Loading...</div>;
  
  return (
    <pulse-feedback
      project-id="PROJECT_KEY" 
      user={JSON.stringify(user)}
    />
  );
}`
  },
  {
    description: 'For TypeScript support, add type definitions in a <AppInlineCode>.d.ts</AppInlineCode> file:',
    code: `declare namespace JSX {
  interface IntrinsicElements {
    'pulse-feedback': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      projectId: string;
      user: string; // JSON stringified user object
    };
  }
}`
  }
]