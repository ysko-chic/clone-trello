import EventHandler from "../utils/EventHandler.js";
import Card from "./card.js";
import Add from "./Add.js";
import Title from "./Title.js";
import App from "./App.js";

let cardIdx = 0;
const List = (index) => {

    let card;
    let title;
    let add;
    let app = App();

    const list = document.createElement('div');
    list.className = 'list';
    list.draggable = true;
    list.id = 'list_' + index;
    document.getElementById('content').append(list);

    add = Add();
    add.getEl().addEventListener('click', function(e) {
        e.stopPropagation();
        if (!title) {
            title = Title();
            list.prepend(title.getEl());
            title.setFocus();

            list.style.backgroundColor = "#ebecf0";

            add.setAddList(title, function(flag) {
                if (flag == 1) {
                    app.addList();
                } else if (flag == 0) {
                    title = null;
                    list.style.backgroundColor = "hsla(0,0%,100%,.30)";
                }
            });
        } else {
            if (title.getLength() > 0) {
                card = Card(cardIdx);
                cardIdx++;
                add.getEl().before(card.getEl());
                card.setFocus();

                add.setAddCard(card, function() {
                    card = null;
                });
            }
        }
    });

    list.append(add.getEl());

    list.addEventListener('mouseover', function(e) {
        console.log("list >> " + list.id);
    });

    list.addEventListener('dragover', function(e) {
        e.preventDefault();
        console.log('list dragover');
    });
    
    list.addEventListener('drop', function(e) {
        e.preventDefault();
        console.log('list drop');

        const target = e.dataTransfer.getData('card');
        if (target) {
            add.getEl().before(document.getElementById(target));
        }
    });
}

export default List;