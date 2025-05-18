import type { InstructionStep } from "./types";

export const steps: InstructionStep[] = [
  {
    description: 'Place the script in <AppInlineCode>_app.tsx</AppInlineCode> (or <AppInlineCode>_app.js</AppInlineCode>) using <AppInlineCode>next/script</AppInlineCode>:',
    code: `import Script from "next/script";
import { useEffect } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Optional: run anything once script is ready
    if (window.pulsekit) {
      window.pulsekit.init("PROJECT_KEY");
    }
  }, []);

  return (
    <>
      <Script
        src="https://trypulsekit.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.pulsekit) {
            window.pulsekit.init("PROJECT_KEY");
          }
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;`
  },
  {
    description: 'Create a small utility wrapper in <AppInlineCode>lib/pulsekit.ts</AppInlineCode>:',
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
    code: `import { useEffect } from "react";
import { identifyUser } from "@/lib/pulsekit";  

const Dashboard = ({ user }) => {
  useEffect(() => {
    if (user) {
      identifyUser({ id: user.id, email: user.email });
    }
  }, [user]);

  return <div>Welcome, {user.name}</div>;
};`
  }
]