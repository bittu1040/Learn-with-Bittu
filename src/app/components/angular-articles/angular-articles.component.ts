import { Component, OnInit } from '@angular/core';
import { listOfQuestions } from '../../shared/topics';

@Component({
  selector: 'app-angular-articles',
  templateUrl: './angular-articles.component.html',
  styleUrls: ['./angular-articles.component.css']
})
export class AngularArticlesComponent implements OnInit {

  AngularTopics:any
  constructor() { }

  ngOnInit(): void {
    this.AngularTopics= listOfQuestions.filter((data)=>{
      return data.category=="angular"
    })
  }

}
