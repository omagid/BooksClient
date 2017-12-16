import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../Models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAll()
    .subscribe((books: Book[]) => {
      this.books = books;
    })
  }
}


// @Component({
//   selector: 'app-clients',
//   templateUrl: './clients.component.html',
//   styleUrls: ['./clients.component.css']
// })
// export class ClientsComponent implements OnInit {
//   clients: any[];
//   totalOwed: number;
//   clientsLoaded: boolean = false;

//   constructor(private clientService: ClientService) { }

//   ngOnInit() {
//     this.clientService.getClients().subscribe(clients => {
//       this.clients = clients;
//       if (clients.length > 0) {
//         this.getTotalOwed();
//       }
//       this.clientsLoaded = true;
//     })
 
