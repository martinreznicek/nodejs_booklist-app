import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
  })
export class BookService {
    
    private booksApiUrl = 'http://localhost:3000/api/';

    constructor(private http: HttpClient) { }

    public async getBooks(): Promise<Book[]> {
        return this.http.get(this.booksApiUrl + 'books')
                .toPromise()
                .then(response => response as Book[])
    }
    
    public async postBook(book: Book): Promise<any> {
      return this.http.post(this.booksApiUrl + 'book', book).toPromise();
    }

    public async deleteBook(bookId: string): Promise<any> {
      return this.http.delete(this.booksApiUrl + 'book' + '/' + bookId).toPromise();
    }
}