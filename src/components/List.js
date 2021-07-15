import Card from "./card.js";
import Add from "./Add.js";
import Title from "./Title.js";
import App from "./App.js";
import CardWrapper from "./CardWrapper.js";

class List {

    constructor(index) {
        this.listDiv = document.createElement('div');
        this.listDiv.className = 'list';
        this.listDiv.id = 'list_' + index;

        this.app = App();
        this.index = index;
        this.cardList = [];

        this.title = null;
        this.card = null;
        this.add = new Add();
        this.cardWrapper = new CardWrapper();
        
        this.setElement();
    }

    setElement = () => {

        this.listDiv.append(this.cardWrapper.cardWrapper);
        this.listDiv.append(this.add.addDiv);
        document.getElementById('content').append(this.listDiv);

        this.setComponents();
    }

    setDropZone = (title) => {

        let { listDiv, cardWrapper } = this;

        listDiv.ondragover = (e) => {
            e.preventDefault();
        };
        
        listDiv.ondrop = (e) => {
            e.preventDefault();
            if (!title || cardWrapper.cardWrapper.childElementCount > 0) return;
            const targetName = e.target.classList.contains('card');
            const target = e.dataTransfer.getData('text');
            if (!targetName && target) {
                cardWrapper.cardWrapper.append(document.getElementById(target));
            }
        };
    }

    setComponents = () => {

        let { app, listDiv, title, add, card, cardList, index } = this;
        const { setDropZone } = this;

        add.addDiv.onclick = (e) => {
            e.stopPropagation();
            if (!title) {
                title = new Title();
                listDiv.prepend(title.titleDiv);
                title.setFocus();
                listDiv.style.backgroundColor = "#ebecf0";

                add.setAddList(title, (flag) => {
                    if (flag == 1) {
                        app.addList();
                        setDropZone(title);
                    } else if (flag == 0) {
                        title = null;
                        listDiv.style.backgroundColor = "hsla(0,0%,100%,.30)";
                    }
                });
            } else {
                if (title.getLength() > 0) {
                    card = new Card(index + cardList.length.toString());
                    cardList.push(card);
                    this.cardWrapper.cardWrapper.append(card.cardDiv);
                    card.setFocus();
                    add.setAddCard(card, function() {
                        card = null;
                    });
                }
            }
        }
    }

    refreshList = () => {
        for (let i = 0; i < this.cardList.length; i++) {
            this.cardList[i].setTargetY();
        }
    }
}

export default List;