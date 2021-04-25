const express = require('express');
const app = express();

// IMPORTS MODULOS NPM
require('dotenv').config();

// SETTING
app.set('PORT',process.env.PORT || 3000);
app.set('trust proxy', true);

// ROUTES
app.use('/', require('./routes/login.routes'));

// SERVER
app.listen(app.get('PORT'), () => {
    console.log(`Server run on port ${app.get('PORT')}`)
})