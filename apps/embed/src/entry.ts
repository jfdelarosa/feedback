import { defineCustomElement } from 'vue';
import BoardComponent from '@/components/Board.vue';

// Define global types for window object
declare global {
    interface Window {
        PulseKit: {
            Board: any;
        };
    }
}

// Define the board custom element
// Vue's defineCustomElement automatically creates components with Shadow DOM
// which ensures CSS encapsulation
const Board = defineCustomElement(BoardComponent);

// Register the custom element
customElements.define('pulse-feedback', Board);

// Expose SDK globally
window.PulseKit = {
    // Components
    Board,
};