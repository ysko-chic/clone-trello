import List from './List.js';

const list = [];
const App = () => {

    return {
        addList: () => {
            list.push(new List(list.length));
        },

        refreshList: () => {
            for (let i of list) {
                i.refreshList();
                console.log('refresh list');
            }
        },

        setList: (item) => {
            list.push(new List(list.length, item));
        }
    }
}

export default App;