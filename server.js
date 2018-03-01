// server.js


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

// Connect to mongoDB database assuming our database name is "angular-app"
const mongoURL = 'mongodb://localhost/angular-app';
mongoose.connect(mongoURL);

//  Serve frontend view
app.use(express.static('public'));

// Specify backend route
router.get('/api', (request, response) => {
    response.status(200).send({message: 'Hello World!'});
});
app.use(router);

// Configure port
const port = 3000;

// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);