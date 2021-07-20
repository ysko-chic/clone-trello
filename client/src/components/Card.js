import App from "./App.js";

class Card {

    constructor(index, cardContent) {
        this.index = index;
        this.isCardComplete = false;
        this.targetY = 0;
        this.pos1 = 0;
        this.pos2 = 0
        this.pos3 = 0
        this.pos4 = 0;

        this.cardDiv = document.createElement('div');
        this.cardText = document.createElement('textarea');
        this.card = document.createElement('span');

        this.setElement();

        if (cardContent) {
            this.setCard(cardContent);
        }
    }

    setElement = () => {

        const { cardDiv, cardText, card, index } = this;

        cardDiv.id = 'cardDiv_' + index;
        cardDiv.className = 'cardDiv';

        cardText.id = 'cardText_' + index;
        cardText.className = 'card';
        
        card.id = 'card_' + index;
        card.className = 'card';
        card.draggable = true;

        cardText.append(card);
        cardDiv.append(cardText);

        cardDiv.onmouseover = this.mouseOverHandler;
        cardDiv.ondragenter = this.dragEnterHandler;
        cardDiv.ondragleave = this.dragLeaveHandler;

        cardText.onclick = (e) => {
            e.stopPropagation();
        }
    }

    cardTextOnFocusOut = () => {
        const { card, cardDiv, cardText } = this;
        card.style.backgroundColor = 'white';
        card.innerHTML = cardText.value;
        cardDiv.replaceChild(card, cardText);
        this.targetY = card.getBoundingClientRect().top + (card.getBoundingClientRect().height / 2);
        this.isCardComplete = true;
    }

    getCardComplete = () => {
        return this.isCardComplete;
    }

    setTargetY = () => {
        this.targetY = this.card.getBoundingClientRect().top + (this.card.getBoundingClientRect().height / 2);
    }

    mouseOverHandler = (e) => {
        const { dragStartHandler, dragEndHandler } = this;
        const target = e.target;
        const targetName = target.classList.contains('card');

        if (targetName) {
            target.ondragstart = dragStartHandler;
            target.ondragend = dragEndHandler;
        }
    }

    dragEnterHandler = (e) => {
        e.preventDefault();
        const { dragOverHandler, dropHandler } = this;
        const target = e.target;
        const targetName = target.classList.contains('card');

        if (targetName) {
            target.ondrop = dropHandler;
            target.ondragover = dragOverHandler;
        }
    }

    dragLeaveHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const targetName = target.classList.contains('card');
        if (targetName) {
            target.style.background = 'linear-gradient(to top, white, white)'
        }
    }

    dragOverHandler = (e) => {
        const target  = e.target;
        if (this.targetY < e.clientY) {
            target.style.background = 'linear-gradient(to bottom, white, gray)';
        } else {
            target.style.background = 'linear-gradient(to top, white, gray)';
        }
    }

    dragStartHandler = (e) => {
        e.dataTransfer.setData('text', document.getElementById(e.target.id).parentNode.id);
        e.dataTransfer.setDragImage(e.target, 0, 0);
        const targetParent = document.getElementById(e.target.id).parentNode.getBoundingClientRect();
        this.targetY = targetParent.top + (targetParent.height / 2);
    }

    dragEndHandler = (e) => {
        const targetParent = document.getElementById(e.target.id).parentNode.getBoundingClientRect();
        this.targetY = targetParent.top + (targetParent.height / 2);
    }

    dropHandler = (e) => {
        const target = e.target;
        const cardOver = e.dataTransfer.getData('text');
        const elmnt = document.getElementById(cardOver);

        if (elmnt) {
            target.style.background = 'linear-gradient(to top, white, white)'
            if (this.targetY < e.clientY) {
                e.target.parentNode.after(elmnt);
            } else {
                e.target.parentNode.before(elmnt);
            }
            App().saveInfo();
            App().refreshList();
        }
    }

    setCard = (cardContent) => {
        this.cardTextOnFocusOut();
        this.card.innerHTML = cardContent;
    }

    setFocus = () => {
        this.cardText.focus();
    }

    getLength = () => {
        return this.cardText.value.length;
    }

    getCardText = () => {
        return this.card.innerHTML;
    }
}

export default Card;