var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@node-book-app.tpf9c.mongodb.net/node-book-app?retryWrites=true&w=majority`
    }

}