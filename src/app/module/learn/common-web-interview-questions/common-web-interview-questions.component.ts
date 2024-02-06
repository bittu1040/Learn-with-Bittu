import { Component } from '@angular/core';

@Component({
  selector: 'app-common-web-interview-questions',
  templateUrl: './common-web-interview-questions.component.html',
  styleUrls: ['./common-web-interview-questions.component.css']
})
export class CommonWebInterviewQuestionsComponent {

  selectedTopic: any;
  title="Common web interview questions and answers";

  showDetails(topic: string) {
    if (this.selectedTopic === topic) {
      this.selectedTopic = null;
    } else {
      this.selectedTopic = topic;
    }
  }
}
