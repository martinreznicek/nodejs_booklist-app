var Book = require('../models/bookSqlModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    
    app.get('/api/books', function(req, res) {
        Book.fetchAll()
         .then(([booksInSQLFormat, fieldData]) => {
            
            const booksAsObjectArray = [];

            booksInSQLFormat.forEach((element) => {
                const book = {
                    id: element.id,
                    title: element.title,
                    author: {
                        firstname: element.author_surname,
                        lastname: element.author_lastname,
                    },
                    isRead: false,
                    yearRead: undefined                
                }

                if (element.isRead === 1) {
                    book.isRead = true;
                    book.yearRead = element.yearRead
                }
                
                booksAsObjectArray.push(book);

            });          

            res.send(booksAsObjectArray);
         } )
         .catch(
            error => console.error(error)
         );
    });

    app.post('/api/book', function(req, res) {        
 
        //when not read, the year must be null
        const yearRead = (req.body.isRead) ? req.body.yearRead : null;

        const newBook = new Book( 
            null,
            req.body.title,
            req.body.author.firstname,
            req.body.author.lastname,
            req.body.isRead,
            yearRead );

        newBook.save()
         .then(() => {
            res.send({message: 'Created'})
         })
         .catch(err => 
            console.error(err)
        );
    
    });

    app.delete('/api/book/:id', function(req, res) {

        Book.deleteById(req.params.id)
         .then(() => res.send({message: 'Deleted'}))
         .catch(err => console.error(err))
    });

}