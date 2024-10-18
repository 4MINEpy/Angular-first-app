import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  @Input() editedBook = new Book(0,"haha","haha",0);
  @Output() bookEdited = new EventEmitter<Book>();
  editBook(title : string, author : string, price : number){
    const newBook = new Book(this.editedBook.id,title,author,price) 
    this.bookEdited.emit(newBook);
    console.log(newBook);
  }
}
