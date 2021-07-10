import EventHandler from "../utils/EventHandler.js";
import Card from "./card.js";
import Add from "./Add.js";
import Title from "./Title.js";
import App from "./App.js";

const List = () => {

    let cardArr = [];
    let card;
    let title;
    let add;
    let addListBtn;
    let addCardBtn;

    const list = document.createElement('div');
    list.className = 'list';
    list.draggable = true;
    list.id = 'list';
    document.getElementById('content').append(list);
    console.log('addList');


    // 여기 부분 CSS로 show hide 사용하기
    add = Add().getEl();
    add.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!title) {
            title = Title().getEl();
            list.prepend(title);
            title.focus();
            
            add.innerHTML = "";

            addListBtn = Add().getAddListBtnEl();
            addListBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (title.innerHTML.length > 0) {
                    add.innerHTML = "+ Add a card";
                    App().addList();
                }
            });
            add.append(addListBtn);
        } else {

            if (title.innerHTML.length > 0) {

                add.innerHTML = "";

                card = Card().getEl();
                add.before(card);
                card.focus();

                addCardBtn = Add().getAddCardBtnEl();
                addCardBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    console.log("card >> " + card.innerHTML);
                    if (card.innerHTML.length > 0) {
                        add.innerHTML = "+ Add a card";
                        cardArr.push(Card());
                        cardArr[cardArr.length - 1].setCard(cardArr.length - 1);
                    }
                });
                add.append(addCardBtn);
            }
        }
    });

    list.append(add);
}

export default List;