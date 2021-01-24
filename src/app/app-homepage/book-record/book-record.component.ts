import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { async } from 'q';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-record',
  templateUrl: './book-record.component.html',
  styleUrls: ['./book-record.component.scss']
})
export class BookRecordComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private bookService: BookService,private router:Router) { }
  bookDetails:any[]=[];
  bookImages:any[]=[];
  recordSize:number=0;
  pageNumber: number = 1;
  bookTitle:any="";
  bookRecords:any[]=[];
  unsortedRecords:any[]=[];
  searchField = new FormControl();
  sortBookRecords = new FormControl();
  cartItems:any[]=[];
  checked = false;
  cartItemsSize:number;
  ngOnInit() {
    this.bookService.fetchBookDetails().subscribe(res=>{
      this.bookDetails = res;
      this.bookDetails.map(book=>{
        book["cartSelection"] = false;
      })
      this.bookRecords = this.bookDetails;
      this.unsortedRecords = this.bookRecords;
      this.recordSize = this.bookDetails.length;
      this.searchField.valueChanges.subscribe(searchvalue=>{
        this.bookDetails = this.bookRecords.filter(book=>{
          if(book.title.toString().toLowerCase().indexOf(searchvalue.toString().toLowerCase()) !== -1){
            return book
          }
        })
      })
      this.sortBookRecords.valueChanges.subscribe(sortvalue=>{
        if(sortvalue == true){
          this.unsortedRecords.sort((a, b) => parseFloat(b.average_rating) - parseFloat(a.average_rating));
          this.bookDetails = this.unsortedRecords;
        }else{
          this.unsortedRecords.sort((a, b) => parseFloat(a.average_rating) - parseFloat(b.average_rating));
          this.bookDetails = this.unsortedRecords;
        }
      })
    })
    this.bookService.fetchBookImages().subscribe(res=>{
      this.bookImages = res;
    })
    this.bookService.cartRecords.subscribe(books=>{
        this.cartItems = books;
    })
    this.cartItemsSize = this.cartItems.length;
  }
  cartSelectionChange(selected,bookID){
    if(selected){
      this.bookDetails.forEach(book=>{
        if(book.bookID == bookID){
          book["cartSelection"] = true;
        }
      })
    } else {
      this.bookDetails.forEach(book=>{
        if(book.bookID == bookID){
          book["cartSelection"] = false;
        }
      })
    }
    this.cartItems = this.bookDetails.filter(book=>{
      return book.cartSelection == true;
    })
    this.cartItemsSize = this.cartItems.length;
    this.bookService.cartRecords.next(this.cartItems);
  }

  paymentPage(){
    this.router.navigate(['/payments'])
  }
}
