import { Component } from '@angular/core';
import {IProduct} from "../interfaces/product.interfaces";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  data: IProduct[] = [
    { Id: 1 , ProductName: 'Iphone X' , Price: 1200 , Qty: 23 },
    { Id: 2 , ProductName: 'Iphone Xr' , Price: 2300 , Qty: 43 },
    { Id: 3 , ProductName: 'Iphone Xs' , Price: 3400 , Qty: 43 },
    { Id: 4 , ProductName: 'Iphone Xs Max' , Price: 5600 , Qty: 21 }
  ];
}
