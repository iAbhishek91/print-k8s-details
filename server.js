const Express = require('express');
const { htmlEnv, htmlVol } = require('./htmlTemplate');
const fs = require('fs');

const PORT = 1222;
const app = Express();


app.get('/', (_, res) => {
  res.status(200).send(htmlEnv(process.env));
});


app.get('/downwardAPI', (_, res) => {
  const LABELS = fs.readFileSync('/etc/downward/labels');
  const ANNOTATIONS = fs.readFileSync('/etc/downward/annotations');

  const vol = { LABELS, ANNOTATIONS };

  res.status(200).send(htmlVol(vol));
});


app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));
