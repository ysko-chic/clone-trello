class Title {

    constructor(item) {
        this.titleDiv = document.createElement('div');
        this.titleInput = document.createElement('input');
        this.title = document.createElement('h2');

        this.isTitleComplete = false;

        this.setElement();

        if (item) {
            this.setTitle(item);
        }
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

    setTitle = (item) => {
        this.titleOnFocusOut();
        this.title.innerHTML = item.title;
        this.isTitleComplete = true;
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

    getTitleText = () => {
        return this.title.innerHTML;
    }
}

export default Title;