var Books = require('../models/bookModel');

module.exports = function(app) {

    app.get('/api/setupBooks', function(req, res) {

            //seed database (try out JSON Generator web)
            var starterBooks = [
                {
                    author: {
                        firstname: 'Bozena',
                        lastname: 'Nemcova'
                    },
                    title: 'Babicka',
                    isRead: true,
                    yearRead: 2020,
                    hasAttachement: false 
                },
                {
                    author: {
                        firstname: 'Karolina',
                        lastname: 'Svetla'
                    },
                    title: 'Kriz u potoka',
                    isRead: false,
                    yearRead: 2020,
                    hasAttachement: false
                },
                {
                    author: {
                        firstname: 'Haruki',
                        lastname: 'Murakami'
                    },
                    title: 'Kafka na pobrezi',
                    isRead: true,
                    yearRead: 2019,
                    hasAttachement: false
                }
            ];
            
            Books.create(starterBooks, function(err, results) {
                res.send(results);
            });

    });

}