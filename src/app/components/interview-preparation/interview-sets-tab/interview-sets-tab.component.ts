import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InterviewSet, InterviewQuestion } from '../../../shared/interview-data';
import { MatCard, MatCardContent } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface FilteredSet extends InterviewSet {
  matchCount?: number;
  matchedQuestions?: InterviewQuestion[];
}

@Component({
    selector: 'app-interview-sets-tab',
    templateUrl: './interview-sets-tab.component.html',
    styleUrls: ['./interview-sets-tab.component.scss'],
    imports: [MatCard, MatCardContent, FormsModule]
})
export class InterviewSetsTabComponent implements OnInit {
  @Input() interviewSets: InterviewSet[] = [];
  @Input() currentView: 'list' | 'detail' = 'list';
  @Input() selectedInterviewSet: InterviewSet | null = null;

  @Output() viewInterviewSet = new EventEmitter<InterviewSet>();
  @Output() backToList = new EventEmitter<void>();

  searchText: string = '';
  filteredSets: FilteredSet[] = [];
  private searchSubject = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.filteredSets = this.interviewSets;
    
    // Debounce search input
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchValue => {
      this.performSearch(searchValue);
    });
  }

  onSearchChange(value: string): void {
    this.searchSubject.next(value);
  }

  performSearch(searchValue: string): void {
    if (!searchValue.trim()) {
      this.filteredSets = this.interviewSets;
      return;
    }

    const searchLower = searchValue.toLowerCase();

    // Search within questions only
    this.filteredSets = this.interviewSets.map(set => {
      const matchedQuestions = set.questions?.filter(q => 
        q.question.toLowerCase().includes(searchLower) ||
        q.category.toLowerCase().includes(searchLower)) ||
         [];
      
      return {
        ...set,
        matchCount: matchedQuestions.length,
        matchedQuestions
      };
    }).filter(set => set.matchCount! > 0);
  }

  clearSearch(): void {
    this.searchText = '';
    this.filteredSets = this.interviewSets;
  }

  highlightText(text: string, search: string): string {
    if (!search.trim()) return text;
    
    const regex = new RegExp(`(${search})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  onViewInterviewSet(set: InterviewSet): void {
    this.viewInterviewSet.emit(set);
  }

  onBackToList(): void {
    this.backToList.emit();
  }
}
