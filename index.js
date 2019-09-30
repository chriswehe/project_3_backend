const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const parser = require('body-parser');

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.use(require('./routes/index.js'));

app.listen(3000, () => {
    console.log('App listening on port 3000!');
   });