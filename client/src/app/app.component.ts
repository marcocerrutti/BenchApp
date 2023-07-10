import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/Pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BenchApp';
  products: Product[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: response  => this.products = response.data, //what to do next
      error: error => console.log(error), //this is what to do in case of an error
      complete: () =>{
        console.log('request completed');
        console.log('extra statement');

      }
    })
  }
}
