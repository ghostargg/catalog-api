const express = require('express')
const app = express()
const phones = require('./phones.json');
const cors = require('cors');

app.use(cors());

app.get('/api/phones', (request, response) => {
  response.json(phones)
})

app.get('/api/phones/:phoneId', (request, response) => {
  const phoneId = request.params.phoneId;

  const phonewith = require(`./phones/${phoneId}.json`)
  if (phonewith) {
    response.json(phonewith)
  } else {
    response.status(404).end();
  }
  console.log(phonewith)

})



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;