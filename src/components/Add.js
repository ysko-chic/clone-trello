const Add = () => {
    const add = document.createElement('div');
    add.className = 'add';
    add.id = 'add';
    add.innerHTML = "+ Add another list";

    return {
        getAdd: () => {
            return add;
        }
    }
}

export default Add;