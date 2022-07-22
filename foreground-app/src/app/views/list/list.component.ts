import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: Book[];

  constructor(
    private bookService: BookService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.getBooks();
  }
  
  private async getBooks(): Promise<void> {
    const books = await this.bookService.getBooks()
    this.books = books;
  }
}
