import type { InstructionStep } from "./types";

export const steps: InstructionStep[] = [
    {
        description: 'Load the script from CDN:',
        code: `<script src="https://cdn.trypulsekit.com/pulsekit.js"></script>`
    },
    {
        description: 'Add the web component to your page:',
        code: `<pulse-feedback 
    project-id="PROJECT_KEY" 
    user='{"externalId": "user123", "name": "John Doe", "email": "john@example.com", "avatar": "https://example.com/avatar.jpg"}' 
/>`
    },
    {
        description: 'If you need to dynamically set the user object:',
        code: `// Create the element
const feedbackElement = document.createElement('pulse-feedback');

// Set attributes
feedbackElement.setAttribute('projectId', 'PROJECT_KEY');

// Set user object
const user = { 
    externalId: 'user123',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://example.com/avatar.jpg'
};
feedbackElement.setAttribute('user', JSON.stringify(user));

// Add to DOM
document.getElementById('feedback-container').appendChild(feedbackElement);`
    }
]