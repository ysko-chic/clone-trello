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
        titleInput.onchange = (e) => {
            e.stopPropagation();
            title.innerHTML = titleInput.value;
        };

        titleInput.addEventListener('focusout', function(e) {
            titleInput.style.backgroundColor = "#ebecf0";
        })

        titleDiv.append(titleInput);
        titleDiv.append(title);
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