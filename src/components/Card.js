const Card = (index) => {

    const cardDiv = document.createElement('div');
    cardDiv.id = 'cardDiv_' + index;
    cardDiv.class = 'cardDiv';
    // cardDiv.style.zIndex = 1;

    const card = document.createElement('span');
    card.id = 'card_' + index;
    card.className = 'card';
    card.draggable = true;
    card.contentEditable = true;
    cardDiv.append(card);

    const cardDim = document.createElement('div');
    cardDim.id = 'cardDim';
    cardDim.className = 'cardDim';

    card.addEventListener('focusout', function(e) {
        card.style.backgroundColor = 'white';
    });

    let dX = 0, dY = 0, posX = 0, posY = 0;
    let targetY = 0, mouseY = 0;

    // 카드를 만들고 위치 바꾸기를 여러번 하다보면 mouseY의 값이 고정되고, mouseOverHandler 가 작동하지 않는다. 왜그럴까?
    const mouseOverHandler = (e) => {
        const target = e.target;
        const targetName = target.classList.contains('card');
        mouseY = e.clientY;
        console.log('mouseY >> ' + mouseY);
        if (targetName) {
            target.ondrag = dragHandler;
            target.ondragstart = dragStartHandler;
            target.ondragend = dragEndHandler;
            target.onclick = function(e) {
                console.log('mouseY >> ' + mouseY + " >> targetY >> " + targetY);
            }
        }
    }

    const dragHandler = (e) => {
        e.preventDefault();
    }

    const dragStartHandler = (e) => {
        e.dataTransfer.setData('text', e.target.id);
    }

    const dragEndHandler = (e) => {
        // mouseY = 0;
    }

    const dragEnterHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const targetName = target.classList.contains('card');
        targetY = target.offsetTop;
        // console.log('targetY >> ' + targetY + " // mouseY >> " + mouseY);

        if (targetName) {
            target.ondrop = dropHandler;
        }
    }

    const dropHandler = function(e) {
        const cardOver = e.dataTransfer.getData('text');
        console.log("cardOver >> " + cardOver);
        if (cardOver) {
            console.log('targetY >> ' + targetY + " // mouseY >> " + mouseY);
            if (targetY > mouseY) {
                e.target.after(document.getElementById(cardOver));
            } else {
                e.target.before(document.getElementById(cardOver));
            }
            // cardDim.remove();
            e.dataTransfer.clearData();
        }
    }

    cardDiv.onmouseover = mouseOverHandler;
    cardDiv.ondragenter = dragEnterHandler;

    return {
        getEl: () => {
            return cardDiv;
        },
        getId: () => {
            return cardDiv.id;
        },
        setFocus: () => {
            card.focus();
        },
        getLength: () => {
            return card.innerHTML.length;
        },
        removeEl: () => {
            cardDiv.remove();
        },
    }
}

export default Card;