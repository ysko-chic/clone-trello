import List from './List.js';

const list = [];
const App = () => {

    return {
        addList: () => {
            console.log("list len >> " + list.length);
            list.push(new List(list.length));
        },

        refreshList: () => {
            for (let i of list) {
                i.refreshList();
                console.log('refresh list');
            }
        }
    }
}

export default App;