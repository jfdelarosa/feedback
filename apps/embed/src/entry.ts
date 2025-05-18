import { defineCustomElement } from 'vue';
import Board from './components/Board.vue';

const Board = defineCustomElement(Board);

// Register the custom element
customElements.define('pk-board', Board);

// Expose SDK globally
window.PulseKit = {
    greet(name) {
        console.log(`Hey ${name}, this is your widget speaking.`);
    },
};