import List from '../components/List.js';

const list = [];
let listIdx = 0;
const App = () => {
    return {
        addList: () => {
            list.push(List(listIdx));
            listIdx++;
            console.log("list length >> " + list.length);
            for (let i = 0; i < list.length; i++) {
                console.log('list id >> ' + list);
            }
        }
    }
}

export default App;