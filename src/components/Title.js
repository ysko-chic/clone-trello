class Title {

    constructor() {
        this.titleDiv = document.createElement('div');
        this.titleInput = document.createElement('input');
        this.title = document.createElement('h2');

        this.isTitleComplete = false;

        this.setElement();
    }

    setElement = () => {
        const { title, titleInput, titleDiv } = this;

        titleDiv.id = 'titleDiv';
        titleDiv.className = 'titleDiv';

        title.id = 'title';
        title.className = 'title';

        titleInput.id = 'titleInput';
        titleInput.className = 'titleInput';
        titleInput.placeholder = 'Enter list title...';

        titleInput.append(title);
        titleDiv.append(titleInput);

        titleInput.onclick = (e) => {
            e.stopPropagation();
        }
    }

    titleOnFocusOut = () => {
        const { titleInput, title, titleDiv } = this;

        title.style.backgroundColor = "#ebecf0";
        title.innerHTML = titleInput.value;
        titleDiv.replaceChild(title, titleInput);
    }

    getTitleComplete = () => {
        return this.isTitleComplete;
    }

    setFocus = () => {
        this.titleInput.focus();
    }

    getLength = () => {
        return this.titleInput.value.length;
    }
    
    setText = () => {
        this.title.innerHTML = this.titleInput.value;
        this.isTitleComplete = true;
    }
}

export default Title;