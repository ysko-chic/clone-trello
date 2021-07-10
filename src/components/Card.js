const Card = (index) => {

    const cardDiv = document.createElement('div');

    const card = document.createElement('span');
    card.id = 'card_' + index;
    card.className = 'card';
    card.draggable = true;
    card.contentEditable = true;
    console.log('addCard');
    cardDiv.append(card);

    cardDiv.addEventListener('mouseover', function(e) {
        const target = e.target;
        const targetName = target.classList.contains('card');

        if (targetName) {
            // target.addEventListener('drag', function(e) {
            //     console.log('drag card');
            // });

            target.addEventListener('dragstart', function(e) {
                console.log('dragstart target id >> ' + e.target.id);
                e.dataTransfer.setData('card', target.id);
            });

            target.addEventListener('dragend', function(e) {
                console.log('dragend card');
            });
        }
    });

    return {
        getEl: () => {
            return cardDiv;
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