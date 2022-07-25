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
    try {
      const books = await this.bookService.getBooks()
      this.books = books;      
    } catch (error) {
      console.error(error);
    }
    
  }

  public async deleteBook(bookId: string): Promise<void> {
    try {
      await this.bookService.deleteBook(bookId);
      this.books = this.books.filter(item => item._id !== bookId );    

    } catch (error) {
      console.error(error);
    }
  }

  public handleUpdate(bookId: string) {
    this.router.navigate(['form/' + bookId]);
  }

}
