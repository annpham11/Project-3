CREATE DATABASE project_3

-- login page for users to enter the website 
CREATE TABlE users (
  id  serial priamry,
  username TEXT,
  password UNIQUE TEXT,
  email UNIQUE TEXT 
);

-- list of the trivia challenges, showing the category the title and the question 

CREATE TABlE trivia-challenges (
  id  serial priamry,
  category TEXT,
  title TEXT,
  picture, TEXT,
  question TEXT
  question_id INTEGER
);

-- select the question from the corresponding trivia-challenges table 
CREATE TABlE answer (
  id  serial priamry,
  answer TEXT, 
  answer_id INTEGER
);

-- adds 5 points to the players total whenever they pick the correct answer
-- doesn't add any point the players score if the get the question wrong 
CREATE TABlE scores (
  id  serial priamry,
  points INTEGER,
  username TEXT
);

-- keeps a record of the different rooms players can enter and displays the table number and number of people in that table 

CREATE TABLE contestests (
      table_number INTEGER,
      username TEXT,
      in_session INTEGER
      
);

-- pull data from contestants table
-- order from highest lowest 

CREATE TABlE contest_ranking (
  id  serial priamry,
  table_number INTEGER,
  username TEXT,   
);


 -- global ranking pull the username and score from the scores table with a limit of 5 contestants 


-- create div boxes have the possible answers in them 
-- if the user clicks on the correct box, turn the background of the div box green and 



