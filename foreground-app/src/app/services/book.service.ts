import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
  })
export class BookService {
    
    private booksApiUrl = 'http://localhost:3000/api/books';

    constructor(private http: HttpClient) { }

    public getBooks(): Promise<Book[]> {
        return this.http.get(this.booksApiUrl)
                .toPromise()
                .then(response => response as Book[])
    }
}