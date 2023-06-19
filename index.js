const express = require('express')
const app = express()
const phones = require('./phones.json');
const cors = require('cors');

app.use(cors());

app.get('/api/phones', (request, response) => {
  response.json(phones)
})

app.get('/api/phones/:phoneId', (request, response) => {
  const phoneId = request.params.phoneId

  const phoneFilter = phoneId.split('-').slice(0,3).join('-')
  const phonesToGet = phones.filter(phone => phone.phoneId.includes(phoneFilter));

  const detailed = phonesToGet.map(phone => require(`./phones/${phone.phoneId}`))
  
  if (detailed) {
    response.json(detailed)
  } else {
    response.status(404).end();
  }
  
})



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;