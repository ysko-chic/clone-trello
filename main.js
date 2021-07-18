import App from "./src/components/App.js";

const app = App();
let items = null;
async function conn () {
    await fetch("http://localhost:5000")
    .then(res => {
        return res.json();
    })
    .then(data => {
        items = data.lists;
        // items.map(item => {
        //     console.log(item.title);
        // })

        if (items && items.length > 0) {
            for (let item of items) {
                app.setList(item);
            }
            app.addList();
        } else {
            app.addList();
        }
    })
    .catch(err => {
        console.log("err >> " + err);
    })
}
conn();