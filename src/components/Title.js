const Title = () => {
    const title = document.createElement('p');
    title.id = 'title';
    title.className = 'title';
    title.contentEditable = true;
    // title.placeholder = 'Enter list title...';

    console.log('addTitle');
    return {
        getEl: () => {
            return title;
        }
    }
}

export default Title;