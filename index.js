// express를 사용하여 서버를 생성
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://koChic:aleldj12!@@boiler-plate.jm4ft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send({
    "lists": [
      { 
        "title": 1,
        "cards": ["벼락 닭꼬치", "숯불 닭꼬치"],
      },
      { 
        "title": 2,
        "cards": ["sideshow", "snowshow", "lifeshow"],
      },
      { 
        "title": 3,
        "cards": ["180 coffee roaster", "starbucks", "ediya coffee"],
      },
      { 
        "title": 4,
        "cards": [],
      },
    ]
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))