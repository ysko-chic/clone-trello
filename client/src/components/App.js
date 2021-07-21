import List from './List.js';

const lists = [];
const App = () => {

    return {
        addList: () => {
            lists.push(new List(lists.length));
        },

        refreshList: () => {
            for (let i of lists) {
                i.refreshList();
                console.log('refresh list');
            }
        },

        setList: (item) => {
            lists.push(new List(lists.length, item));
        },

        saveInfo: () => {
            const infos = {
                lists: []
            }

            for (let list of lists) {
                const info = {
                    title: null,
                    cards: []
                }
                if (list.getTitle() != null) {
                    info.title = list.getTitle().title.innerHTML;
                }
                for (let card of list.getCard()) {
                    info.cards.push(card.firstChild.innerHTML)
                }
                if (info.title) {
                    infos.lists.push(info);
                }
            }

            fetch("http://localhost:5000/" + "update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(infos)
            })
            .then(res => {
                console.log("res >> " + res.json().toString());
            })
            .catch(err => {
                console.log("err >> " + err);
            })
        }
    }
}

export default App;