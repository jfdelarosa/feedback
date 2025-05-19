# PulseKit Embed SDK

A lightweight JavaScript SDK to embed PulseKit feedback collection in any web application.

## Installation

Include the SDK in your web application:

```html
<script src="https://cdn.pulsekit.dev/sdk.js"></script>
```

Or use npm:

```bash
npm install @pulsekit/embed
```

## Initialization

Initialize the SDK with your API key:

```javascript
// Using global script
PulseKit.init('your-api-key');

// Using ES modules
import { PulseKit } from '@pulsekit/embed';
PulseKit.init('your-api-key');
```

### Configuration Options

```javascript
PulseKit.init('your-api-key', {
  baseUrl: 'https://custom-api.example.com', // Optional custom API endpoint
  // Additional options...
});
```

## User Identification

Associate feedback with specific users:

```javascript
PulseKit.identify({
  id: 'user-123',         // Required
  email: 'user@example.com', // Optional
  name: 'John Doe',       // Optional
  avatar: 'https://example.com/avatar.png' // Optional
});
```

> **Note:** Without user identification, the feedback board will operate in read-only mode. Users can view existing feedback but cannot submit new feedback, vote, or comment.

## Adding the Feedback Board

Add the feedback board component to your HTML:

```html
<pulse-feedback></pulse-feedback>
```

## Feedback Board Modes

### Read-only Mode

The feedback board enters read-only mode when no user is identified. In this mode:

- Users can view existing feedback items and comments
- "My Feedback" tab is hidden
- Submission form is hidden
- Voting buttons are disabled
- Comment submission is disabled
- A banner informs users they are in read-only mode

### Interactive Mode

When a user is identified via `PulseKit.identify()`, the board enables:

- Feedback submission
- Voting on feedback items
- Commenting on feedback items
- Filtering by "My Feedback"

## Advanced Usage

### Checking SDK State

```javascript
const state = PulseKit.getState();
console.log('SDK Initialized:', state.initialized);
console.log('Current User:', state.user);
```

### Using with React

```jsx
import { useEffect } from 'react';
import '@pulsekit/embed';

function FeedbackWidget() {
  useEffect(() => {
    // Initialize on component mount
    PulseKit.init('your-api-key');
    
    // Identify user if available
    if (user) {
      PulseKit.identify({
        id: user.id,
        name: user.name,
        email: user.email
      });
    }
  }, []);

  return <pulse-feedback />;
}
```

### Using with Vue

```vue
<template>
  <pulse-feedback></pulse-feedback>
</template>

<script>
export default {
  mounted() {
    // Initialize on component mount
    window.PulseKit.init('your-api-key');
    
    // Identify user if available
    if (this.user) {
      window.PulseKit.identify({
        id: this.user.id,
        name: this.user.name,
        email: this.user.email
      });
    }
  }
}
</script>
```

## API Reference

### `PulseKit.init(apiKey, options?)`

Initializes the SDK with your API key and optional configuration.

**Parameters:**
- `apiKey` (string): Your PulseKit API key
- `options` (object, optional): Configuration options
  - `baseUrl` (string, optional): Custom API endpoint URL

**Returns:** The SDK object for chaining

### `PulseKit.identify(user)`

Identifies the current user for personalized feedback. Required to enable interactive mode.

**Parameters:**
- `user` (object): User information
  - `id` (string, required): Unique user identifier
  - `email` (string, optional): User's email address
  - `name` (string, optional): User's display name
  - `avatar` (string, optional): URL to user's avatar image

**Returns:** The SDK object for chaining

### `PulseKit.getState()`

Returns the current state of the SDK.

**Returns:** Object containing:
- `initialized` (boolean): Whether the SDK is initialized
- `user` (object|null): Current user information if identified
- `baseUrl` (string): API endpoint URL

## Browser Support

The PulseKit SDK supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

- **Board not loading**: Ensure you've initialized the SDK before adding the component
- **Authentication errors**: Verify your API key is correct
- **CORS errors**: Contact support if you're experiencing cross-origin issues
- **Read-only mode**: If you can't submit feedback, ensure you've called `PulseKit.identify()` with valid user information
