import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRepository } from 'src/app/model/product.repository';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing: boolean = false;
  product: Product = new Product();

  constructor(private activeRoute: ActivatedRoute,private repository: ProductRepository,private router:Router) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if(this.editing) {
      this.product = repository.getProduct(activeRoute.snapshot.params['id']);
    }
  }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
