const Card = () => {
    const card = document.createElement('div');
    card.id = 'card';
    card.className = 'card';
    card.draggable = true;
    card.contentEditable = true;
    console.log('addCard');

    let index = 0;

    card.addEventListener('mouseover', function() {
        console.log("card mouseover " + index);
    });

    return {
        getEl: () => {
            return card;
        },

        setCard: (idx) => {
            index = idx;
            console.log("setCard " + idx);
        }
    }
}

export default Card;