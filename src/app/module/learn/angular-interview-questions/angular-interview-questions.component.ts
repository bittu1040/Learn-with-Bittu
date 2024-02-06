import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-interview-questions',
  templateUrl: './angular-interview-questions.component.html',
  styleUrls: ['./angular-interview-questions.component.css']
})
export class AngularInterviewQuestionsComponent {


  selectedTopic: any;
  title="Angular interview questions and answers";

  showDetails(topic: string) {
    if (this.selectedTopic === topic) {
      this.selectedTopic = null;
    } else {
      this.selectedTopic = topic;
    }
  }
}
