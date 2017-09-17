import { Component, OnInit }  from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './app/products/product-list.component.html',
    styleUrls: ['./app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private productService: ProductService,
                private _route:ActivatedRoute    
            ) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listFilter = this._route.snapshot.queryParams['filterBy'] || '';
        this.showImage = (this._route.snapshot.queryParams['showImage'] === 'true');
        console.log(`Filter value coming back :  ${this.listFilter} and showImage Value coming back ${this.showImage} `)

        this.productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }
}
