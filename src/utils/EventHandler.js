import Card from "../components/card.js";

const EventHandler = () => {

    return {
        mouseOverHandler: (event) => {
            const target = event.target;
            const targetName = target.classList.contains('card');

            if (targetName) {
                target.addEventListener('drag', EventHandler().dragHandler, false);
                target.addEventListener('dragstart', EventHandler().dragStartHandler, false);
            }
        },

        dragHandler: (event) => {
            console.log('drag');
        },

        dragStartHandler: (event) => {
            const target = event.target;
            event.dataTransfer.setDragImage(target, 0, 0);
            event.dataTransfer.setData('list', target.id);
        },

        addCard: (list) => {
            // let title = document.createElement('div');
            // title.id = 'title';
            // title.className = 'title';
            // title.contentEditable = true;

            let card = Card();
            list.prepend(card.getCard());
        }
    }
}

export default EventHandler;