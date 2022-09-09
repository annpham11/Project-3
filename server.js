const express = require('express'); 
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.use(express.static('client/build'));

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
  }); 

const quizMockData = [{
    id: 0,
    category: "math",
    questions: [
        {
            questionText: "2+2",
            correctAnswer: "4",
            choices: [
                "4",
                "22",
                "8",
                "0",
            ]
        },
        {
            questionText: "10 / 5",
            correctAnswer: "2",
            choices:   [
                "15",
                "2",
                "5",
                "50"
            ], 
        },
        {
            questionText: "12 * 12",
            correctAnswer: "144",
            choices:   [
                "144",
                "1212",
                "1",
                "24"
            ]
        }
    ]
}]

app.get('/api/quizzes', (req, res) => {
    //const sql = "SELECT * FROM challenges order by id";
    //db.query(sql).then((dbRes) => {
      //res.json(dbRes.rows);
    //});
    res.json(quizMockData);
  });