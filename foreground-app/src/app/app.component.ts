import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  
  private getBooks(): void {
    this.bookService.getBooks()
    .then(books => this.books = books);
  }


}
