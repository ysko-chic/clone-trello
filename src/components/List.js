import EventHandler from "../utils/EventHandler.js";
import Card from "./card.js";
import Add from "./Add.js";
import Title from "./Title.js";
import App from "./App.js";

const List = () => {

    let card = [];
    let title;
    let add;

    const list = document.createElement('div');
    list.className = 'list';
    list.draggable = true;
    list.id = 'list';
    document.getElementById('content').append(list);
    console.log('addList');

    add = Add().getEl();
    add.addEventListener('click', function() {
        if (!title) {
            title = Title();
            list.prepend(title.getEl());
            add.innerHTML = "+ Add a card";
            App().addList();
        } else {
            card.push(Card());
            add.before(card[card.length - 1].getEl());
            card[card.length - 1].setCard(card.length - 1);
        }
    });

    list.append(add);
}

export default List;