import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  bookForm: FormGroup;
  thisYear: number;
  bookToCreate: Book = undefined;

  isTheBookRead: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router
    ) {
      this.thisYear = new Date(Date.now()).getFullYear()
      this.createBookForm();
    }

  ngOnInit(): void {

  }

  public async postBook(newBook: Book): Promise<void> {
    await this.bookService.postBook(newBook);
  }

  private createBookForm() {
    this.bookForm = new FormGroup({
      author_firstname: new FormControl('', Validators.required),
      author_lastname: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      isRead: new FormControl(false, Validators.required),
      yearRead: new FormControl(undefined)
    });
  
  }
  
  //FORM validators
  get title() { return this.bookForm.get('title'); }
  get author_firstname() { return this.bookForm.get('author_firstname'); }
  get author_lastname() { return this.bookForm.get('author_lastname'); }
  get isRead() { return this.bookForm.get('isRead'); }
  get yearRead() { return this.bookForm.get('yearRead'); }

  async onClickSubmit() {
    const bookToSend: Book = {
      author: 
        {
          firstname: this.bookForm.controls.author_firstname.value,
          lastname: this.bookForm.controls.author_lastname.value
        },
      title: this.bookForm.controls.title.value,
      isRead: this.bookForm.controls.isRead.value
    }
    if (bookToSend.isRead) {
      bookToSend.yearRead = this.bookForm.controls.yearRead.value;
    }
    console.log(bookToSend);    
    this.postBook(bookToSend);
    this.router.navigate(['list']);
  }

  isItRead(): boolean {
    !this.isTheBookRead;
    return this.isTheBookRead;
  }

}
