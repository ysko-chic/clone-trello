const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    lists: [
        {
            title: {
                
            },
            cards: [

            ]
        }
    ]
});


const User = mongoose.model("User", userSchema);

module.exports = { User };