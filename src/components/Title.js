class Title {

    constructor() {
        this.titleDiv = document.createElement('div');
        this.titleInput = document.createElement('input');
        this.title = document.createElement('h2');

        this.setElement();
    }

    setElement = () => {
        const { title, titleInput, titleDiv } = this;

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

    setFocus = () => {
        this.titleInput.focus();
    }

    getLength = () => {
        return this.titleInput.value.length;
    }
    
    setText = () => {
        this.title.innerHTML = this.titleInput.value;
    }
}

export default Title;