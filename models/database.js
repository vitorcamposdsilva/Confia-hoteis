var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://VitorCamposdaSilva:<password>@cluster0.46ah3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise
});

module.exports = mongoose;