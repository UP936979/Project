const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send(`
  <h1> Do you want to kiss me?</h1>
  <form action = "/result" method ="POST">
    <input type ="text">
    <button>Submit Answer<button>
  </form>
  `)
});

app.post("/result", (req,res) => {
    res.send("Thanks for Submitting the form.")
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)

});