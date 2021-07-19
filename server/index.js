// express를 사용하여 서버를 생성
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const { List } = require('./model/List');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://koChic:aleldj12!@@clone-trello.lwmyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send("HIHIHI");
})

app.get('/lists', (req, res) => {
  List.findOne((err, listInfo) => {
      if (err) return res.status(500).send({error: 'database failure'});
      res.json(listInfo);
  })
})

app.put('/update', (req, res) => {
  List.findOne((err, listInfo) => {
    if (listInfo == null) {
      const list = new List(req.body);
      list.save((err, listInfo) => {
        if (err) {
          return res.json({ success: false, err });
        }
        return res.status(200).json({
          success: true
        })
      });
    } else {
      List.updateOne(req.body, (err, listInfo) => {
        if (err) {
          return res.json({ success: false, err});
        }
        return res.status(200).json({
          success: true
        })
      })
    }
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))