const mongoose = require('mongoose');  // Fix: Remove the dot before 'require'

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log('DB connection error:', err));
}

module.exports = connectToDb;