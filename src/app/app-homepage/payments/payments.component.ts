import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  currentCart:any[]=[];
  constructor(private bookService:BookService,private router:Router) { }
  totalprice:number=0;
  ngOnInit(){
    this.bookService.cartRecords.subscribe(books=>{
      this.currentCart = books;
      books.forEach(book => {
        this.totalprice+=book.price;
      });
    })
  }
  navigateBookRecord(){
    this.bookService.cartRecords.next(this.currentCart);
    this.router.navigate(['/'])
  }
}
