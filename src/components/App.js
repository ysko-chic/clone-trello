import List from './List.js';

const list = [];
const App = () => {

    // window.addEventListener("unload", (e) => {
    //     e.preventDefault();

    //     console.log('unload saveinfo');
    //     this.saveInfo();
    // });

    return {
        addList: () => {
            list.push(new List(list.length));
            console.log('list len >> ' + list.length);
        },

        refreshList: () => {
            for (let i of list) {
                i.refreshList();
                console.log('refresh list');
            }
        },

        setList: (item) => {
            list.push(new List(list.length, item));
        },

        saveInfo: () => {
            var infos = {
                lists: []
            }

            for (let index of list) {
                var info = {
                    title: null,
                    cards: []
                }
                if (index.getTitle() != null) {
                    info.title = index.getTitle().title.innerHTML;
                }
                for (let card of index.getCard()) {
                    info.cards.push(card.getCardText())
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