const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express frontend!');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

