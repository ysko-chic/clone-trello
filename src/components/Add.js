const Add = () => {
    const add = document.createElement('span');
    add.className = 'add';
    add.id = 'add';
    add.innerHTML = "+ Add another list";

    const addListBtn = document.createElement('button');
    addListBtn.className = 'addListBtn';
    addListBtn.innerHTML = 'Add list';
    addListBtn.id = 'addListBtn';

    const addCardBtn = document.createElement('button');
    addCardBtn.className = 'addCardBtn';
    addCardBtn.innerHTML = 'Add card';
    addCardBtn.id = 'addCardBtn';

    return {
        getEl: () => {
            return add;
        },
        getAddListBtnEl: () => {
            return addListBtn;
        },
        getAddCardBtnEl: () => {
            return addCardBtn;
        }
    }
}

export default Add;