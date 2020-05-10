import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';


@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryRepository:CategoryRepository) {}

  public selectedCategory: Category = null;
  @Output() category=new EventEmitter<Category>();

  ngOnInit(): void {}

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;
    this.category.emit(newCategory);
}

get categories(): Category[] {
  return this.categoryRepository.getCategories();

}

}
