const Title = () => {
    const title = document.createElement('div');
    title.id = 'title';
    title.className = 'title';
    title.contentEditable = true;
    title.focus();
    // title.placeholder = 'Enter list title...';
    console.log('addTitle');
    
    return {
        getTitle: () => {
            return title;
        }
    }
}

export default Title;