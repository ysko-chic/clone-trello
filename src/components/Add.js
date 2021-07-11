const Add = () => {
    const addDiv = document.createElement('div');
    const addSpanDiv = document.createElement('div');
    const addListDiv = document.createElement('div');
    const addCardDiv = document.createElement('div');

    addDiv.className = 'addDiv';
    addSpanDiv.className = 'addDiv';
    addListDiv.className = 'addDiv';
    addCardDiv.className = 'addDiv';

    addSpanDiv.style.display = 'inline';
    addListDiv.style.display = 'none';
    addCardDiv.style.display = 'none';

    const add = document.createElement('span');
    add.className = 'add';
    add.id = 'add';
    add.innerHTML = "+ Add another list";

    const addListBtn = document.createElement('button');
    addListBtn.className = 'addBtn';
    addListBtn.innerHTML = 'Add list';
    addListBtn.id = 'addListBtn';

    const addCardBtn = document.createElement('button');
    addCardBtn.className = 'addBtn';
    addCardBtn.innerHTML = 'Add card';
    addCardBtn.id = 'addCardBtn';

    const addListXBtn = document.createElement('button');
    addListXBtn.className = 'addXBtn';
    addListXBtn.innerHTML = 'X';
    addListXBtn.id = 'addListXBtn';

    const addCardXBtn = document.createElement('button');
    addCardXBtn.className = 'addXBtn';
    addCardXBtn.innerHTML = 'X';
    addCardXBtn.id = 'addCardXBtn';

    addSpanDiv.append(add);
    addListDiv.append(addListBtn);
    addListDiv.append(addListXBtn);
    addCardDiv.append(addCardBtn);
    addCardDiv.append(addCardXBtn);

    addDiv.append(addSpanDiv);
    addDiv.append(addListDiv);
    addDiv.append(addCardDiv);

    let title;
    let card;
    let listCallback;
    let cardCallback;

    addListBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (title.getLength() > 0) {
            title.setText();
            add.innerHTML = "+ Add a card";
            add.style.color = "#172b4d";
            addSpanDiv.style.display = 'inline';
            addListDiv.style.display = 'none';
            listCallback(1);
        }
    });

    addListXBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        title.removeEl();
        add.innerHTML = "+ Add another list";
        addSpanDiv.style.display = 'inline';
        addListDiv.style.display = 'none';
        listCallback(0);
    });

    addCardBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (card.getLength() > 0) {
            add.innerHTML = "+ Add a card";
            addSpanDiv.style.display = 'inline';
            addCardDiv.style.display = 'none';
        }
    });

    addCardXBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        card.removeEl();
        add.innerHTML = "+ Add a card";
        addSpanDiv.style.display = 'inline';
        addCardDiv.style.display = 'none';
        cardCallback();
    });

    document.body.addEventListener('click', function() {

        // 이부분을 flag 달아서 on / off 로 바꾸면 좋을듯
        // if (title) {
        //     title.removeEl();
        //     add.innerHTML = "+ Add another list";
        //     addSpanDiv.style.display = 'inline';
        //     addListDiv.style.display = 'none';
        //     if (listCallback) listCallback(0);
        // }

        // if (card) {
        //     card.removeEl();
        //     add.innerHTML = "+ Add a card";
        //     addSpanDiv.style.display = 'inline';
        //     addCardDiv.style.display = 'none';
        //     if (cardCallback) cardCallback();
        // }
    });

    return {
        getEl: () => {
            return addDiv;
        },
        setAddList: (_title, _callback) => {
            addListDiv.style.display = 'inline';
            addSpanDiv.style.display = 'none';
            addCardDiv.style.display = 'none';

            title = _title;
            listCallback = _callback;
        },
        setAddCard: (_card, _callback) => {
            addListDiv.style.display = 'none';
            addSpanDiv.style.display = 'none';
            addCardDiv.style.display = 'inline';

            card = _card;
            cardCallback = _callback;
        }
    }
}

export default Add;