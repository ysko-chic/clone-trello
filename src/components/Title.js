const Title = () => {

    const titleDiv = document.createElement('div');
    const titleInput = document.createElement('input');
    const title = document.createElement('h2');
    title.id = 'title';
    title.className = 'title';

    titleInput.id = 'titleInput';
    titleInput.className = 'titleInput';
    titleInput.placeholder = 'Enter list title...';
    titleInput.addEventListener('change', function(e) {
        e.stopPropagation();
        title.innerHTML = titleInput.value;
    })

    titleInput.addEventListener('focusout', function(e) {
        titleInput.style.backgroundColor = "#ebecf0";
    })

    titleDiv.append(titleInput);
    titleDiv.append(title);

    return {
        getEl: () => {
            return titleDiv;
        },
        setFocus: () => {
            titleInput.focus();
        },
        getLength: () => {
            return titleInput.value.length;
        },
        removeEl: () => {
            titleDiv.remove();
        },
        setText: () => {
            title.innerHTML = titleInput.value;
        }
    }
}

export default Title;