import List from '../components/List.js';

const list = [];
let listIdx = 0;
const App = () => {

    // document.body.onclick = function(e) {
    //     console.log('body click');
    // }

    return {
        addList: () => {
            list.push(List(listIdx));
            listIdx++;
        }
    }
}

export default App;