class Add {

    constructor() {
        this.addDiv = document.createElement('div');
        this.addSpanDiv = document.createElement('div');
        this.addListDiv = document.createElement('div');
        this.addCardDiv = document.createElement('div');

        this.add = document.createElement('span');
        this.addListBtn = document.createElement('button');
        this.addCardBtn = document.createElement('button');
        this.addListXBtn = document.createElement('button');
        this.addCardXBtn = document.createElement('button');

        this.setElement();
    }

    setElement = () => {

        const { addDiv, addSpanDiv, addListDiv, addCardDiv } = this;
        const { add, addListBtn, addCardBtn, addListXBtn, addCardXBtn } = this;

        addDiv.className = 'addDiv';
        addSpanDiv.className = 'addDiv';
        addListDiv.className = 'addDiv';
        addCardDiv.className = 'addDiv';

        addSpanDiv.style.display = 'inline';
        addListDiv.style.display = 'none';
        addCardDiv.style.display = 'none';
        
        add.className = 'add';
        add.id = 'add';
        add.innerHTML = "+ Add another list";
        
        addListBtn.className = 'addBtn';
        addListBtn.innerHTML = 'Add list';
        addListBtn.id = 'addListBtn';
        
        addCardBtn.className = 'addBtn';
        addCardBtn.innerHTML = 'Add card';
        addCardBtn.id = 'addCardBtn';

        addListXBtn.className = 'addXBtn';
        addListXBtn.innerHTML = 'X';
        addListXBtn.id = 'addListXBtn';
        
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
    }

    setAddList = (_title, _callback) => {

        const { addListDiv, addSpanDiv, addCardDiv } = this;
        const { add, addListBtn, addListXBtn } = this;

        addListDiv.style.display = 'inline';
        addSpanDiv.style.display = 'none';
        addCardDiv.style.display = 'none';

        addListBtn.onclick = (e) => {
            e.stopPropagation();
            listClickHandler();
        };

        _title.titleDiv.onkeydown = (e) => {
            if (e.keyCode == 13) {
                e.preventDefault();
                listClickHandler();
            }
        }

        const listClickHandler = () => {
            if (_title.getLength() > 0) {
                _title.setText();
                _title.titleOnFocusOut();
                add.innerHTML = "+ Add a card";
                add.style.color = "#172b4d";
                addSpanDiv.style.display = 'inline';
                addListDiv.style.display = 'none';
                _callback(0);
            }
        }

        addListXBtn.onclick = (e) => {
            e.stopPropagation();
            _title.titleDiv.remove();
            add.innerHTML = "+ Add another list";
            addSpanDiv.style.display = 'inline';
            addListDiv.style.display = 'none';
            _callback(1);
        }

        document.body.onclick = (e) => {
            e.stopPropagation();
            document.body.onclick = null;
            if (_title.getTitleComplete()) return;
            _title.titleDiv.remove();
            add.innerHTML = "+ Add another list";
            addSpanDiv.style.display = 'inline';
            addListDiv.style.display = 'none';
            _callback(1);
        }
    }

    setAddCard = (_card, _callback) => {

        const { addListDiv, addSpanDiv, addCardDiv } = this;
        const { add, addCardBtn, addCardXBtn } = this;

        addListDiv.style.display = 'none';
        addSpanDiv.style.display = 'none';
        addCardDiv.style.display = 'inline';

        addCardBtn.onclick = (e) => {
            e.stopPropagation();
            cardClickHandler();
        }

        _card.cardDiv.onkeydown = (e) => {
            if (e.keyCode == 13) {
                e.preventDefault();
                cardClickHandler();
            }
        }

        const cardClickHandler = () => {
            if (_card.getLength() > 0) {
                add.innerHTML = "+ Add a card";
                addSpanDiv.style.display = 'inline';
                addCardDiv.style.display = 'none';
                _card.cardTextOnFocusOut();
                _callback(0);
            }
        }

        addCardXBtn.onclick = (e) => {
            e.stopPropagation();
            _card.cardDiv.remove();
            add.innerHTML = "+ Add a card";
            addSpanDiv.style.display = 'inline';
            addCardDiv.style.display = 'none';
            _callback(1);
        }

        document.body.onclick = (e) => {
            e.stopPropagation();
            document.body.onclick = null;
            if (_card.getCardComplete()) return;
            _card.cardDiv.remove();
            add.innerHTML = "+ Add a card";
            addSpanDiv.style.display = 'inline';
            addCardDiv.style.display = 'none';
            _callback(1);
        }
    }
}

export default Add;