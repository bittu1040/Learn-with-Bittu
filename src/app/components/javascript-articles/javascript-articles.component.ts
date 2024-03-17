import { Component, OnInit } from '@angular/core';
import { listOfQuestions } from 'app/shared/topics';
@Component({
  selector: 'app-javascript-articles',
  templateUrl: './javascript-articles.component.html',
  styleUrls: ['./javascript-articles.component.css']
})
export class JavascriptArticlesComponent implements OnInit {

JSTopics:any

ngOnInit(): void {
  this.JSTopics= listOfQuestions.filter((data)=>{
    return data.category=="javascript"
  })
}
}
