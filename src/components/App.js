import List from '../components/List.js';

const list = [];
const App = () => {

    return {
        addList: () => {
            list.push(List());
            console.log("list length >> " + list.length);
        }
    }
}

export default App;