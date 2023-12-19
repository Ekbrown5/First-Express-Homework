const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of Beer on the Wall</h1>
    <p><a href="/98">Take one down, pass it around</a></p>
  `);
});

app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);


  if (isNaN(numberOfBottles)) {
    res.status(400).send('Invalid input. Please provide a valid number of bottles.');
    return;
  }

 
  let pageContent = `<h1>${numberOfBottles} Bottle${numberOfBottles !== 1 ? 's' : ''} of Beer on the Wall</h1>`;


  if (numberOfBottles > 0) {
    pageContent += `<p><a href="/${numberOfBottles - 1}">Take one down, pass it around</a></p>`;
  }

 
  pageContent += `<p><a href="/">Start over</a></p>`;


  res.send(pageContent);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});