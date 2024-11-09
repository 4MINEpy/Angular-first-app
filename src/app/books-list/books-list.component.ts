import { Component } from '@angular/core';
import { BookAddComponent } from '../book-add/book-add.component';
import { Book } from '../model/book';
import { BookEditComponent } from '../book-edit/book-edit.component';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent,BookEditComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
    title = "Liste des Livres : "
    i = 0
    books =   [
      new Book(1,"The Night Circus","Erin Morgenstern",12.99),
      new Book(2,"Educated","Tara Westover",14.99),
      new Book(3,"Dune","Frank Herbert",10.99),
      new Book(4,"Tree","Amin Medfai",99.99)
    ]    
    action = ""
    changeAction(action : string){
      this.action = action;
    }
    addBook(book : Book){
      this.books = [...this.books,book];
      this.changeAction("");
    }
    edit = ""
    changeEdit(edit : string){
      this.edit = edit;
    }
    getIndex(i : number){
      this.i = i;
    }
    editBook(book : Book){
      //this.books[this.i] = book;
      //avec function map
      this.books = this.books.map(currentBook => currentBook.id === book.id ? book : currentBook);
      this.changeEdit("");
    } 
    delBook(id : number){
      //this.books.splice(i,1);
      //avec filter
      if(confirm("Are you sure you want to delete this book?")){
        this.books = this.books.filter(currentBook => currentBook.id != id)
      }
    }
}
