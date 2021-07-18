import Card from "./card.js";
import Add from "./Add.js";
import Title from "./Title.js";
import App from "./App.js";
import CardWrapper from "./CardWrapper.js";

class List {

    constructor(index, item) {
        this.listDiv = document.createElement('div');
        this.listDiv.className = 'list';
        this.listDiv.id = 'list_' + index;

        this.app = App();
        this.index = index;
        this.cardList = [];

        this.title = null;
        this.add = new Add();
        this.cardWrapper = new CardWrapper();
        
        this.setElement();

        if (item) {
            this.setItem(item);
        }
    }

    setElement = () => {

        const { setComponents, listDiv, cardWrapper, add } = this;

        listDiv.append(cardWrapper.cardWrapper);
        listDiv.append(add.addDiv);
        document.getElementById('content').append(listDiv);

        setComponents();
    }

    setDropZone = (title) => {

        const { listDiv, cardWrapper } = this;

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
                this.app.saveInfo();
            }
        };
    }

    setComponents = () => {
        const { add } = this;
        add.addDiv.onclick = (e) => {
            e.stopPropagation();
            this.create();
        }
    }

    create = () => {

        let card = null;
        const { create, setDropZone, app, listDiv, add, cardList, index, cardWrapper } = this;

        if (!this.title) {
            this.title = new Title();
            listDiv.prepend(this.title.titleDiv);
            this.title.setFocus();
            listDiv.style.backgroundColor = "#ebecf0";

            add.setAddList(this.title, (flag) => {
                if (flag == 0) {
                    app.addList();
                    setDropZone(title);
                    app.saveInfo();
                } else if (flag == 1) {
                    this.title = null;
                    listDiv.style.backgroundColor = "hsla(0,0%,100%,.30)";
                }
            });
        } else {
            if (this.title.getTitleComplete()) {
                card = new Card(index + cardList.length.toString());
                cardWrapper.cardWrapper.append(card.cardDiv);
                card.setFocus();
                add.setAddCard(card, (flag) => {
                    if (flag == 0) {
                        cardList.push(card);
                        app.saveInfo();
                        create();
                    } else if (flag == 1) {
                        card = null;
                    }
                });
            }
        }
    }

    setItem = (item) => {
        let card = null;
        const { setDropZone, listDiv, cardList, index, cardWrapper } = this;

        this.title = new Title(item);
        listDiv.prepend(this.title.titleDiv);
        listDiv.style.backgroundColor = "#ebecf0";
        setDropZone(this.title);
        
        if (item.title) {
            for (let cardContent of item.cards) {
                card = new Card(index + cardList.length.toString(), cardContent);
                cardWrapper.cardWrapper.append(card.cardDiv);
                cardList.push(card);
            }
        }

        this.refreshList();
        this.add.add.style.color = "#172b4d";
        this.add.add.innerHTML = "+ Add a card";
    }

    refreshList = () => {
        for (let card of this.cardList) {
            card.setTargetY();
        }
    }

    getTitle = () => {
        return this.title;
    }

    getCard = () => {
        return this.cardWrapper.cardWrapper.childNodes;
    }
}

export default List;