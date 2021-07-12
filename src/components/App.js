import List from '../components/List.js';

const list = [];
const App = () => {

    return {
        addList: () => {
            console.log("list len >> " + list.length);
            list.push(new List(list.length));
        }
    }
}

export default App;