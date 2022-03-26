const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pirates_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log("Greetings from the DATABASE! We are ready to Rock & Roll!"))
    .catch(err => console.log("Database connection error.", err));