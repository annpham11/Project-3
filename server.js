const express = require('express'); 
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
const pg = require('pg')
const bcrypt = require('bcrypt');
const { expressSession, pgSession } = require('./session');
const { generateHash, isValidPassword } = require('./util/hash');


// app.use(express.json);
app.use(express.static('client/build'));
app.use(express.static("client"));
app.use(express.json());

const db = new pg.Pool({
  database:"trivia_project",
})

app.use(
  expressSession({
    store: new pgSession({
      pool: db,
      createTableIfMissing: true, 
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  })
);

// login page 
app.get('/trivia/login', (req,res)=> {
    const {email, password } = req.body;
  
    const sql = 'SELECT * FROM users WHERE email=$1';
    db.query(sql, [email]).then((db) => {
      if (
        db.rows.length === 0) {
        return res.status(400).json({ message: 'Sorry, Either the email and/or password you specified is incorrect.' });
      }
      const user = db.rows[0];

      const hashedPassword = user.password;
  
      if (isValidPassword(password, hashedPassword)) {
        req.session.email = email;
        return res.json({});
      }
      return res.status(400).json({ message: 'Email and/or password are incorrect.' });
    }).catch(err => {
      res.status(500).json({});
    })
  
  });
  
 
// signup page 
app.post('/trivia/signup', (req,res)=> {
    const {username, password, email} = req.body;

    // if (username === '' || password === '' || email === '') {
    //   return res.status(400).json({ message: 'Please Enter required data into the box below.' });
    // }
    
    const hashedPassword = generateHash(password)
    const sql = `INSERT INTO users(username, email, password) VALUES($1,$2,$3)`;

    db.query(sql, [username,email, hashedPassword]).then(() => {
      res.json({});
    }).catch((err) => {
      res.status(500).json({});
    });

    app.get('/trivia/session', (req, res) => {
      const email = req.session.email;
    
      if (!email) {
        return res.status(401).json({ message: 'Currently Not logged In' });
      } else {
        return res.json({ email: email });
      }
    });

app.post('/trivia/logout', (req,res)=>{
    if(req.session){
      req.session.destroy(err => {
        if(err){
          res.status(400).send('Unable to logout')
        } else {
          res.send('logout successful')
        }
      }) 
    }else {
        res.end()
    }
})

  
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
  })})

