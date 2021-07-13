import Card from "./card.js";
import Add from "./Add.js";
import Title from "./Title.js";
import App from "./App.js";

class List {

    constructor(index) {
        this.index = index;
        this.cardList = [];
        this.list = document.createElement('div');
        this.app = App();

        this.title = null;
        this.add = null;
        this.card = null;
        
        this.setElement();
    }

    setElement = () => {

        let { list, index } = this;

        list.className = 'list';
        list.draggable = true;
        list.id = 'list_' + index;
        document.getElementById('content').append(list);

        this.setComponents();
    }

    setEvent = (add, title) => {

        let { list } = this;

        list.ondragover = (e) => {
            e.preventDefault();
            console.log('list on dropover');
        };
        
        list.ondrop = (e) => {
            e.preventDefault();
            console.log('list on drop');
            if (!title) return;
            const targetName = e.target.classList.contains('card');
            const target = e.dataTransfer.getData('text');
            if (!targetName && target) {
                add.addDiv.before(document.getElementById(target));
            }
        };
    }

    setComponents = () => {

        let { app, list, title, add, card, cardList, index } = this;
        const { setEvent } = this;

        add = new Add();
        add.addDiv.onclick = (e) => {
            e.stopPropagation();
            if (!title) {
                title = new Title();
                list.prepend(title.titleDiv);
                title.setFocus();
                list.style.backgroundColor = "#ebecf0";

                add.setAddList(title, (flag) => {
                    if (flag == 1) {
                        app.addList();
                        setEvent(add, title);
                    } else if (flag == 0) {
                        title = null;
                        list.style.backgroundColor = "hsla(0,0%,100%,.30)";
                    }
                });
            } else {
                if (title.getLength() > 0) {
                    card = new Card(index + cardList.length.toString());
                    cardList.push(card);
                    add.addDiv.before(card.cardDiv);
                    card.setFocus();
                    add.setAddCard(card, function() {
                        card = null;
                    });
                }
            }
        }

        list.append(add.addDiv);
    }

    refreshList = () => {
        for (let i = 0; i < this.cardList.length; i++) {
            this.cardList[i].setTargetY();
        }
    }
}

export default List;