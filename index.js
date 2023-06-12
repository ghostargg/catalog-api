const express = require('express')
const app = express()
const phones = require('./phones.json');
const cors = require('cors');

app.use(cors());

app.get('/api/phones', (request, response) => {
  response.json(phones)
})

app.get('/api/phones/:id', (request, response) => {
  const id = request.params.id;
  const phone = phones.find(phone => phone.id === id);
  if (phone) {
    response.json(phone);
  } else {
    response.status(404).end();
  }
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;