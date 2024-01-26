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
}
