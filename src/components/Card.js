import App from "./App.js";

class Card {

    constructor(index) {
        this.index = index;
        this.targetY = 0;
        // let dX = 0, dY = 0, posX = 0, posY = 0;

        this.cardDiv = document.createElement('div');
        this.cardText = document.createElement('textarea');
        this.card = document.createElement('span');
        this.cardDim = document.createElement('div');

        this.setElement();
    }

    setElement = () => {

        const { cardDiv, cardText, card, cardDim } = this;
        let { index } = this;

        cardDiv.id = 'cardDiv_' + index;
        cardDiv.className = 'cardDiv';

        cardText.id = 'cardText_' + index;
        cardText.className = 'card';
        
        card.id = 'card_' + index;
        card.className = 'card';
        card.draggable = true;

        cardText.append(card);
        cardDiv.append(cardText);

        // cardDim.id = 'cardDim';
        // cardDim.className = 'cardDim';

        // cardText.addEventListener('focusout', this.cardTextOnFocusOut);
        // card.onclick = this.cardOnClick;
        cardDiv.onmouseover = this.mouseOverHandler;
        cardDiv.ondragenter = this.dragEnterHandler;
    }

    cardTextOnFocusOut = () => {
        const { card, cardDiv, cardText } = this;
        card.style.backgroundColor = 'white';
        card.innerHTML = cardText.value;
        cardDiv.replaceChild(card, cardText);
        this.targetY = this.card.getBoundingClientRect().top + (this.card.getBoundingClientRect().height / 2);
    }

    setTargetY = () => {
        this.targetY = this.card.getBoundingClientRect().top + (this.card.getBoundingClientRect().height / 2);
    }

    // cardOnClick = (e) => {
    //     // const { card, cardDiv, cardText } = this;
    //     // card.append(cardText);
    //     // cardText.appendChild(document.createTextNode(card.value));
    //     // cardDiv.replaceChild(cardText, card);
    //     // cardText.focus();
    // }

    mouseOverHandler = (e) => {
        const { dragHandler, dragStartHandler, dragEndHandler } = this;
        const target = e.target;
        const targetName = target.classList.contains('card');
        console.log("targetY >> " + this.targetY + " // boundingTop >> " + document.getElementById(target.id).parentNode.getBoundingClientRect().top + " // boundingHeight >> " + (document.getElementById(target.id).parentNode.getBoundingClientRect().height / 2));

        if (targetName) {
            target.ondrag = dragHandler;
            target.ondragstart = dragStartHandler;
            target.ondragend = dragEndHandler;
        }
    }

    dragEnterHandler = (e) => {
        e.preventDefault();
        const { dropHandler } = this;
        const target = e.target;
        const targetName = target.classList.contains('card');
        if (targetName) {
            target.ondrop = dropHandler;
        }
    }

    dragHandler = (e) => {
        e.preventDefault();
    }

    dragStartHandler = (e) => {
        e.dataTransfer.setData('text', document.getElementById(e.target.id).parentNode.id);
        const targetParent = document.getElementById(e.target.id).parentNode.getBoundingClientRect();
        this.targetY = targetParent.top + (targetParent.height / 2);
        console.log('dragStart targetY >> ' + this.targetY);
    }

    dragEndHandler = (e) => {
        const targetParent = document.getElementById(e.target.id).parentNode.getBoundingClientRect();
        this.targetY = targetParent.top + (targetParent.height / 2);
        console.log("dragEnd targetY >> " + this.targetY);
        App().refreshList();
    }

    dropHandler = (e) => {
        const cardOver = e.dataTransfer.getData('text');
        if (cardOver) {
            if (this.targetY < e.clientY) {
                e.target.parentNode.after(document.getElementById(cardOver));
            } else {
                e.target.parentNode.before(document.getElementById(cardOver));
            }
            
            // cardDim.remove();
            e.dataTransfer.clearData();
        }
    }

    setFocus = () => {
        this.cardText.focus();
    }

    getLength = () => {
        return this.cardText.innerHTML.length;
    }
}

export default Card;