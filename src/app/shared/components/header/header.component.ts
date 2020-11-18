import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../core/services/cart.service';
import { Observable, observable } from 'rxjs/';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 

  total$: Observable<number>;


  constructor(
    private carService: CartService
  ) {
    this.total$ = this.carService.cart$
    .pipe(
      map(products => products.length)
    );
   }

  ngOnInit() {
  }

}
