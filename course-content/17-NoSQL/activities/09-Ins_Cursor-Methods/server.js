const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/alphabetDB`;

let db;

const data = [
  { letter: 'a' },
  { letter: 'c' },
  { letter: 'e' },
  { letter: 'f' },
  { letter: 'h' },
  { letter: 'i' },
  { letter: 'j' },
  { letter: 'l' },
  { letter: 'b' },
  { letter: 'd' },
  { letter: 'g' },
  { letter: 'k' },
];

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    db.collection('letterList').deleteMany({});
    db.collection('letterList').insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log('Data inserted');
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());
// http://localhost:3001/read
// GET request to read all the documents in a collection
app.get('/read', (req, res) => {
  db.collection('letterList')
    // find() returns all documents. Equivalent to `Select *` in SQL.
    .find()
    // sort() sorts in ascending or descending order
    // Specify in the sort parameter the field or fields to sort by and a value 
    // of 1 or -1 to specify an ascending or descending sort respectively.
    // 1 ascending, -1 descending
    .sort({ letter: 1 })
    // skips first returned document
    .skip(1)
    // limits returns to 10
    .limit(10)
    .toArray((err, results) => {
      // Handles error or results
      if (err) throw err;
      res.send(results);
    });
});
