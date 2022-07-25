var mysql = require('../util/mysql-db')

module.exports = class Book {
    constructor(id, title, author_surname, author_lastname, isRead, yearRead) {
        this.id = id;
        this.title = title;
        this.author_surname = author_surname;
        this.author_lastname = author_lastname;
        this.isRead = isRead;
        this.yearRead = yearRead
    }

    static fetchAll() {
        return mysql.execute('SELECT * FROM books');
    }

    save() {
        return mysql.execute('INSERT INTO books (title, author_surname, author_lastname, isRead, yearRead) VALUES (?, ?, ?, ?, ?)',
        [this.title, this.author_surname, this.author_lastname, this.isRead, this.yearRead]
        );
    }

    static deleteById(id) {
        return mysql.execute(`DELETE FROM books WHERE id = ${id}`)
    }
}


