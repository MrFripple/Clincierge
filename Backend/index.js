require('dotenv').config();
const path = require('path');
const express = require('express'); 
const router = require('./routes.js');
const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, '..','Frontend','build')));

app.use(router);


const PORT = process.env.port || 3001;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`listening on port: ${PORT}`);
  };
});
