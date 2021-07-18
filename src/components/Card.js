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
        this.cardDim = document.createElement('span');

        this.setElement();

        if (cardContent) {
            this.setCard(cardContent);
        }
    }

    setElement = () => {

        const { cardDiv, cardText, card, cardDim, index } = this;

        cardDiv.id = 'cardDiv_' + index;
        cardDiv.className = 'cardDiv';

        cardText.id = 'cardText_' + index;
        cardText.className = 'card';
        
        card.id = 'card_' + index;
        card.className = 'card';
        card.draggable = true;

        cardDim.id = 'cardDim';
        cardDim.className = 'cardDim';

        cardText.append(card);
        cardDiv.append(cardText);

        // cardText.addEventListener('focusout', this.cardTextOnFocusOut);
        // card.onclick = this.cardOnClick;
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
        const { dragHandler, dragStartHandler, dragEndHandler } = this;
        const target = e.target;
        const targetName = target.classList.contains('card');

        if (targetName) {
            // target.onmousedown = this.mouseDownHandler;
            // target.onmousemove = dragHandler;
            target.ondrag = dragEndHandler;
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
            target.style.backgroundColor = "lightgray";

            // if (this.targetY < e.clientY) {
            //     console.log('cardDim after ' + this.cardDim.getBoundingClientRect().width);
            //     target.after(this.cardDim);
            // } else {
            //     console.log('cardDim before ' + this.cardDim.getBoundingClientRect().height);
            //     target.before(this.cardDim);
            // }
        }
    }

    dragLeaveHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const targetName = target.classList.contains('card');
        if (targetName) {
            target.style.backgroundColor = 'white';
            this.cardDim.remove();
        }
    }

    dragHandler = (e) => {
        e.preventDefault();
    }

    // mouseMoveHandler = (e) => {
    //     e.preventDefault();
    //     const parNo = e.target.parentNode;
    //     this.pos1 = this.pos3 - e.clientX;
    //     this.pos2 = this.pos4 - e.clientY;
    //     this.pos3 = e.clientX;
    //     this.pos4 = e.clientY;

    //     parNo.style.top = (parNo.offsetTop - this.pos2) + 'px';
    //     parNo.style.left = (parNo.offsetLeft - this.pos1) + 'px';
    // }

    // mouseUpHandler = (e) => {
    //     const parNo = e.target.parentNode;
    //     parNo.style.position = 'none';
    //     parNo.onmousedown = null;
    //     parNo.onmouseup = null;
    //     parNo.onmousemove = null;
    // }

    // mouseOutHandler = (e) => {
    //     const parNo = e.target.parentNode;
    //     parNo.style.position = 'none';
    //     parNo.onmousedown = null;
    //     parNo.onmouseup = null;
    //     parNo.onmousemove = null;
    // }

    // mouseDownHandler = (e) => {
    //     e.preventDefault();
    //     const parNo = e.target.parentNode;
    //     // parNo.onmousemove = this.mouseMoveHandler;
    //     parNo.onmouseup = this.mouseUpHandler;
    //     parNo.onmouseout = this.mouseOutHandler;
    //     parNo.style.position = 'absolute';
    //     this.pos3 = e.clientX;
    //     this.pos4 = e.clientY;
    // }

    dragStartHandler = (e) => {
        // e.preventDefault();
        e.dataTransfer.setData('text', document.getElementById(e.target.id).parentNode.id);
        const targetParent = document.getElementById(e.target.id).parentNode.getBoundingClientRect();
        this.targetY = targetParent.top + (targetParent.height / 2);
    }

    dragEndHandler = (e) => {
        const targetParent = document.getElementById(e.target.id).parentNode.getBoundingClientRect();
        this.targetY = targetParent.top + (targetParent.height / 2);
        if (this.cardDim) {
            this.cardDim.remove();
        }
    }

    dropHandler = (e) => {
        const target = e.target;
        const cardOver = e.dataTransfer.getData('text');
        const elmnt = document.getElementById(cardOver);

        if (elmnt) {
            target.style.backgroundColor = 'white';
            if (this.targetY < e.clientY) {
                e.target.parentNode.after(elmnt);
            } else {
                e.target.parentNode.before(elmnt);
            }
            App().saveInfo();
            App().refreshList();
            // this.cardDim.remove();
            // e.dataTransfer.clearData();
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