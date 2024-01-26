import { Component, OnInit } from '@angular/core';
import { InterviewTopic, listOfQuestions } from 'app/shared/topics';

@Component({
  selector: 'app-learn-overview',
  templateUrl: './learn-overview.component.html',
  styleUrls: ['./learn-overview.component.css'],
})
export class LearnOverviewComponent implements OnInit {
  title1 = 'Basic Web Question';
  title2 = 'JavaScript Interview Topics';
  title3 = 'Angular Interview Topics';


  listOfQuestions: InterviewTopic[] | undefined;
  basicwebTopics: InterviewTopic[] | undefined;
  javascriptTopics: InterviewTopic[] | undefined;
  angularTopics: InterviewTopic[] | undefined;

  basicwebquestion: boolean = false;
  jsquestion: boolean = false;
  angularquestion: boolean = true;

  selectedTopic: string ="Angular";
  
  constructor() {}

  ngOnInit(): void {
    this.listOfQuestions = listOfQuestions;
    this.basicwebTopics = this.listOfQuestions.filter((data) => {
      return data.category === 'basicwebquestion';
    });

    this.javascriptTopics = this.listOfQuestions.filter((data) => {
      return data.category === 'javascript';
    });

    this.angularTopics = this.listOfQuestions.filter((data) => {
      return data.category === 'angular';
    });
  }

  updateTopics(event: Event) {
    const selectedTopic = (event.target as HTMLSelectElement).value;
    if (selectedTopic === 'ALL') {
      this.basicwebquestion = true;
      this.jsquestion = true;
      this.angularquestion = true;
    } else if (selectedTopic === 'Angular') {
      this.angularquestion = true;
      this.jsquestion = false;
      this.basicwebquestion = false;
    } else if (selectedTopic === 'JavaScript') {
      this.jsquestion = true;
      this.angularquestion = false;
      this.basicwebquestion = false;
    } else if (selectedTopic === 'basicwebquestion') {
      this.basicwebquestion = true;
      this.jsquestion = false;
      this.angularquestion = false;
    }
  }
}
