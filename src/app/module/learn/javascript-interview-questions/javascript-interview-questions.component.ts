import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript-interview-questions',
  templateUrl: './javascript-interview-questions.component.html',
  styleUrls: ['./javascript-interview-questions.component.css']
})
export class JavascriptInterviewQuestionsComponent {

  selectedTopic: any;
  title="Javascript interview questions and answers";

  showDetails(topic: string) {
    if (this.selectedTopic === topic) {
      this.selectedTopic = null;
    } else {
      this.selectedTopic = topic;
    }
  }
}
