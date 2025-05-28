import { defineCustomElement } from 'vue';
import BoardComponent from '@/components/Board.vue';
import KanbanComponent from '@/components/Kanban.vue';

// Define global types for window object
declare global {
    interface Window {
        PulseKit: {
            Board: any;
            Kanban: any;
        };
    }
}

// Define the board custom element
// Vue's defineCustomElement automatically creates components with Shadow DOM
// which ensures CSS encapsulation
const Board = defineCustomElement(BoardComponent);
const Kanban = defineCustomElement(KanbanComponent);

// Register the custom element
customElements.define('pulsekit-board', Board);
customElements.define('pulsekit-kanban', Kanban);

// Expose SDK globally
window.PulseKit = {
    // Components
    Board,
    Kanban,
};