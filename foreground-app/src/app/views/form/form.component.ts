import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
    ) {
      this.thisYear = new Date(Date.now()).getFullYear()
      this.createBookForm();
    }

  ngOnInit(): void {

  }

  private createBookForm() {
    this.bookForm = this.formBuilder.group({
      author: {
        firstname: [''],
        lastname: ['']
      },
      title: [''],
      isRead: [''],
      yearRead: [''],
      hasAttachement: ['']
    });
  }

}
