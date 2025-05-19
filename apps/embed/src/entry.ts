import type { PulseKitOptions, PulseKitUser } from './lib/sdk';
import { defineCustomElement } from 'vue';
import { SDK } from './lib/sdk';
import BoardComponent from '@/components/Board.vue';

// Define global types for window object
declare global {
    interface Window {
        PulseKit: {
            init: (apiKey: string, options?: PulseKitOptions) => typeof SDK;
            identify: (user: PulseKitUser) => typeof SDK;
            getState: () => { initialized: boolean; user: PulseKitUser | null; baseUrl: string };
            version: string;
            Board: any;
        };
    }
}

// Define the board custom element
const Board = defineCustomElement(BoardComponent);

// Register the custom element
customElements.define('pulse-feedback', Board);

// Expose SDK globally
window.PulseKit = {
    // SDK methods
    init: SDK.init,
    identify: SDK.identify,
    getState: SDK.getState,
    version: SDK.version,

    // Components
    Board,
};