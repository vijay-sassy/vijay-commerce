import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  cartRecords= new BehaviorSubject<any>([]);
  constructor(public http: HttpClient) { }

  public fetchBookDetails():Observable<any>{
    return this.http.get<any>("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json")
  }

  public fetchBookImages():Observable<any>{
    return this.http.get("http://s3-ap-southeast-1.amazonaws.com/he-public-data/bookimage816b123.json")
  }
}
