'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

app.set('view engine','pug'); // Pug engine set for server side calculated and rendered values
fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.route('/').get((req, res) => {  
  // Rendering the pug pages with .render method. 
  // When one doesnt want AJAX kinda CRUD operations then this PUG engine will help to create static webpages rendered in server side and sent as HTML to client.
  res.render("D:/Belgeler/VScode/FCC_Certification/7-Quality_Assurance_Certification/Learn2-Advancednode/views/pug"); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
