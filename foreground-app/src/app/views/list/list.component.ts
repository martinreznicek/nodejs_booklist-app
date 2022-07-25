import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public bookService: BookService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.getBooks();
  }
  
  private async getBooks(): Promise<void> {
    try {
      const books = await this.bookService.getBooks()
      this.bookService.books = books;      
    } catch (error) {
      console.error(error);
    }
    
  }

  public async deleteBook(bookId: string): Promise<void> {
    try {
      await this.bookService.deleteBook(bookId);
      this.bookService.books = this.bookService.books.filter(item => item.id !== bookId );    

    } catch (error) {
      console.error(error);
    }   
    
  }
}
