import { Component, OnInit } from '@angular/core';
import { InterviewTopic, listOfQuestions} from 'app/shared/topics';

@Component({
  selector: 'app-learn-overview',
  templateUrl: './learn-overview.component.html',
  styleUrls: ['./learn-overview.component.css']
})
export class LearnOverviewComponent implements OnInit {
  title1 = 'Common Interview Topics';
  title2 = 'JavaScript Interview Topics';
  title3 = 'Angular Interview Topics';
  listOfQuestions: InterviewTopic[] | undefined
  commonInterviewTopics:any;
  javascriptTopics:any;
  angularTopics:any

  constructor() {}


  ngOnInit(): void {

    this.listOfQuestions= listOfQuestions;
    console.log(this.listOfQuestions)
    this.commonInterviewTopics= this.listOfQuestions.filter((data)=>{
      return data.category==="basicwebquestion"
    })

    this.javascriptTopics= this.listOfQuestions.filter((data)=>{
      return data.category==="javascript"
    })

    this.angularTopics= this.listOfQuestions.filter((data)=>{
      return data.category==="angular"
    })

  }

  updateTopics() {}
}
