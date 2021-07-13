import List from '../components/List.js';

const list = [];
const App = () => {

    return {
        addList: () => {
            console.log("list len >> " + list.length);
            list.push(new List(list.length));
        },

        refreshList: () => {
            for (let i = 0; i < list.length; i++) {
                list[i].refreshList();
                console.log('refresh list');
            }
        }
    }
}

export default App;