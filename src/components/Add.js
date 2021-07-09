const Add = () => {
    const add = document.createElement('div');
    add.className = 'add';
    add.id = 'add';
    add.innerHTML = "+ Add another list";

    return {
        getEl: () => {
            return add;
        }
    }
}

export default Add;