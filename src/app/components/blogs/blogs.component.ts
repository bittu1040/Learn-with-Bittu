import { Component, OnInit } from '@angular/core';
import { blogList } from 'app/shared/blogs';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardImage, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatAnchor } from '@angular/material/button';

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.scss'],
    imports: [FormsModule, MatCard, MatCardImage, MatCardContent, MatCardActions, MatAnchor]
})
export class BlogsComponent implements OnInit {

  articles=blogList;
  filteredArticles: any[] = [];

  constructor() {
    this.filterArticles();
  }


  ngOnInit(): void {
    
  }

  selectedCategory: string = 'all';

  filterArticles(): void {
    if (this.selectedCategory === 'all') {
      this.filteredArticles = this.articles; 
    } else {
      this.filteredArticles = this.articles.filter(article => article.category === this.selectedCategory); 
    }
  }

  onCategoryChange(): void {
    this.filterArticles();
  }


  // get filteredArticles() {
  //   return this.articles.filter(article => {
  //     if (this.selectedCategory === 'all') {
  //       return true; 
  //     } else {
  //       return article.category === this.selectedCategory;
  //     }
  //   });
  // }
  
}
