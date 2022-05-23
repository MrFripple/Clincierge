const path = require('path');
const axios = require('axios');
const express = require('express'); 

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, '..','Frontend','build')));


app.get('/api', async (req, res) => {
  const payload = await axios({
    method: 'get',
    url: 'https://foodish-api.herokuapp.com/api/',
  });
  res.send(payload.data);
});

const PORT = process.env.port || 3001;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`listening on port: ${PORT}`);
  };
});
