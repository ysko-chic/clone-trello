const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    lists: [
        {
            title: {
                
            },
            cards: [

            ]
        }
    ]
});


const List = mongoose.model("List", listSchema);

module.exports = { List };