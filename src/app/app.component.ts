import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  logo = "https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png";
}