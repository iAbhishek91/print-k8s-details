const Express = require('express');
const { html } = require('./htmlTemplate');

const PORT = 1222;
const app = Express();


app.get('/', (_, res) => {
  res.status(200).send(html(process.env));
});


app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));
