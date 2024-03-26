import { Component, OnInit } from '@angular/core';
import { blogList } from 'app/shared/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  articles=blogList;
  constructor(){}

  ngOnInit(): void {
    
  }
  
}
