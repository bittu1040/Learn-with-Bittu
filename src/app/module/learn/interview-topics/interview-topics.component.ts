import { Component, Input } from '@angular/core';
import { InterviewTopic } from 'app/shared/topics';

@Component({
  selector: 'app-interview-topics',
  templateUrl: './interview-topics.component.html',
  styleUrls: ['./interview-topics.component.css']
})
export class InterviewTopicsComponent {
  @Input() title: string | undefined;
  @Input() category: InterviewTopic[] | undefined;


  selectedTopic: any;

  showDetails(topic: string) {
    if (this.selectedTopic === topic) {
      this.selectedTopic = null;
    } else {
      this.selectedTopic = topic;
    }
  }
}
