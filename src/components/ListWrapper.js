import List from "./List.js";
import Title from "./Title.js";
import Add from "./Add.js";
import Card from "./card.js";
import CardWrapper from "./CardWrapper.js";
import App from "./App.js";

class ListWrapper {
    constructor(index) {

        this.listWrapper = document.createElement('div');
        this.listWrapper.id = 'listWrapper';
        this.listWrapper.className = 'listWrapper';

        this.app = App();
        this.cardList = [];
        this.index = index;

        this.list = new List(index);
        this.title = null;
        this.card = null;
        this.add = new Add();
        this.cardWrapper = new CardWrapper();

        this.list.listDiv.append(this.cardWrapper.cardWrapper);
        this.list.listDiv.append(this.add.addDiv);
        this.listWrapper.append(this.list.listDiv);

        document.getElementById('content').append(this.listWrapper);

        this.setAddClick();
    }

    setAddClick = () => {
        const { list, add, app, cardWrapper } = this;
        let { title, card, index, cardList } = this;

        add.addDiv.onclick = (e) => {
            e.stopPropagation();

            if (!title) {
                title = new Title();
                list.listDiv.prepend(title.titleDiv);
                title.setFocus();
                list.listDiv.style.backgroundColor = "#ebecf0";

                add.setAddList(title, (flag) => {
                    if (flag == 1) {
                        app.addList();
                        // setEvent(add, title);
                    } else if (flag == 0) {
                        title = null;
                        list.listDiv.style.backgroundColor = "hsla(0,0%,100%,.30)";
                    }
                });
            } else {
                if (title.getLength() > 0) {
                    card = new Card(index + cardList.length.toString());
                    cardList.push(card);
                    cardWrapper.cardWrapper.append(card.cardDiv);
                    card.setFocus();
                    add.setAddCard(card, function() {
                        card = null;
                    });
                }
            }
        }
    }
}

export default ListWrapper;