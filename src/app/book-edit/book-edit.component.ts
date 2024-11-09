import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Book } from '../model/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  @Input() editedBook = new Book(0,"haha","haha",0);
  @Output() bookEdited = new EventEmitter<Book>();
  editBook(){
    //const newBook = new Book(this.editedBook.id,title,author,price) 
    //this.bookEdited.emit(newBook);
    //console.log(newBook);
    this.bookEdited.emit(this.editedBook);
  }
}
