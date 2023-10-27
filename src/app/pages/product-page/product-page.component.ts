import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'angular app';
  //products: Iproduct[] = [];
  loading = false;
  //products$: Observable<Iproduct[]>;
  term = '';

  constructor(
    public ProductsService: ProductsService,
    public modalService: ModalService
    ) {}

  ngOnInit(): void {
    this.loading = true;
    //this.products$ = this.ProductsService.getAll().pipe(
    //  tap(() => (this.loading = false))
    //);
    this.ProductsService.getAll().subscribe((products) => {
      this.loading = false;
    });
  }
}
