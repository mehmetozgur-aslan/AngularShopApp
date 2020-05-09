import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/model/product.repository';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Product } from 'src/app/model/product.model';
import { Category } from 'src/app/model/category.model';
import { Cart } from 'src/app/model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart: Cart,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public selectedCategory: Category = null;
  public productsPerPage = 3;
  public selectedPage = 1;

  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;
    return this.productRepository
      .getProducts(this.selectedCategory)
      .slice(index, index + this.productsPerPage);
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;
    this.selectedPage = 1;
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.productRepository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((a, i) => i + 1);
  }

  changePage(p: number) {
    this.selectedPage = p;
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('/cart');
  }
}
