const Card = () => {
    const card = document.createElement('div');
    card.id = 'card';
    card.className = 'card';
    card.draggable = true;
    card.contentEditable = true;
    console.log('addCard');

    return {
        getCard: () => {
            return card;
        }
    }
}

export default Card;