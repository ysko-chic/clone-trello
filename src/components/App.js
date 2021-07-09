import List from '../components/List.js';

const App = () => {
    const list = [];

    return {
        start: () => {
            list.push(List());
        },

        addList: () => {
            list.push(List());
            console.log("list length >> " + list.length);
        }
    }
}

export default App;