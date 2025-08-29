import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InterviewSet } from '../../../shared/interview-data';

@Component({
  selector: 'app-interview-sets-tab',
  templateUrl: './interview-sets-tab.component.html',
  styleUrls: ['./interview-sets-tab.component.scss']
})
export class InterviewSetsTabComponent implements OnInit {
  @Input() interviewSets: InterviewSet[] = [];
  @Input() currentView: 'list' | 'detail' = 'list';
  @Input() selectedInterviewSet: InterviewSet | null = null;

  @Output() viewInterviewSet = new EventEmitter<InterviewSet>();
  @Output() backToList = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onViewInterviewSet(set: InterviewSet): void {
    this.viewInterviewSet.emit(set);
  }

  onBackToList(): void {
    this.backToList.emit();
  }
}
