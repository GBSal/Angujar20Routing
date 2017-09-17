import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent
                            implements OnInit        
{
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private _router:Router,
                private _route:ActivatedRoute) { }

   ngOnInit(){
        this.product = this._route.snapshot.data["product"];
   }     

 
    onBack():void{
        this._router.navigate(["/products"],{queryParamsHandling:"preserve"});
      }
    
     

}
