var Book = require('../models/bookModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    
    app.get('/api/books', function(req, res) {
        Book.find( { }, function(err, books) {
            if (err) throw err;

            res.send(books);
        });
    });

    app.get('/api/books/:yearRead', function(req, res) {

        Book.find( {yearRead: req.params.yearRead}, function(err, books) {
            if (err) throw err;

            res.send(books);
        });

    });
    
    // app.get('/api/books/:authorlastname', function(req, res) {

    //     Books.find({ authorlastname: req.params.author.lastname }, function(err, books) {
    //         if (err) throw err;

    //         res.send(books);
    //     });

    // });

    app.get('/api/books/:isRead', function(req, res) {

        Book.find({ isRead: req.params.isRead }, function(err, books) {
            if (err) throw err;

            res.send(books);
        });

    });

    app.get('/api/book/:id', function(req, res) {

        Book.findById({ _id: req.params.id }, function(err, book) {
            if (err) throw err;

            res.send(book);
        });

    });

    app.post('/api/book', function(req, res) {

        //update existing book
        if (req.body.id) {
            Book.findByIdAndUpdate(req.body.id, {
                //author: req.body.author,
                title: req.body.title,
                isRead: req.body.isRead,
                yearRead: req.body.yearRead,
                hasAttachement: req.body.hasAttachement
            }),
            function(err) {
                if (err) throw err;

                res.send('Updated');
            }
        }

        //create a new book
        else {
            var newBook = Book({    
                author: req.body.author,            
                title: req.body.title,
                isRead: req.body.isRead,
                yearRead: req.body.yearRead,
                hasAttachement: req.body.hasAttachement 
            });
            newBook.save(function(err) {
                if (err) throw err;

                res.send('Created')
            });
        }
    });

    app.delete('/api/book', function(req, res) {

        Book.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;

            res.send('Deleted');
        })

    });
}