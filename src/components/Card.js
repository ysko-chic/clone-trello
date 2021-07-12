class Card {

    constructor(index) {
        this.index = index;
        this.targetY = 0;
        this.mouseY = 0;
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
        cardDiv.class = 'cardDiv';

        cardText.id = 'cardText_' + index;
        cardText.className = 'card';
        
        card.id = 'card_' + index;
        card.className = 'card';
        card.draggable = true;

        console.log('card >> ' + card.id);

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
    }

    // cardOnClick = (e) => {
    //     console.log('card onclick targetY >> ' + this.targetY + " // mouseY >> " + this.mouseY);
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
        this.mouseY = e.clientY;
    }

    dragStartHandler = (e) => {
        e.dataTransfer.setData('text', e.target.id);
        this.targetY = e.target.getBoundingClientRect().top;
    }

    dragEndHandler = (e) => {
        // mouseY = 0;
    }

    dropHandler = (e) => {
        const cardOver = e.dataTransfer.getData('text');
        if (cardOver) {
            if (this.targetY < this.mouseY) {
                e.target.after(document.getElementById(cardOver));
            } else {
                e.target.before(document.getElementById(cardOver));
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