import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/model/product.repository';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Product } from 'src/app/model/product.model';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styles: [
    `
      .pt-100 {
        padding-top: 100px;
      }
    `,
  ],
})
export class ShopComponent implements OnInit {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
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
  }
}
