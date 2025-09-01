import { Component, OnInit } from '@angular/core';
import { InterviewSet, INTERVIEW_SETS, GithubRepository, GITHUB_REPOSITORY } from '../../shared/interview-data';

@Component({
    selector: 'app-interview-preparation',
    templateUrl: './interview-preparation.component.html',
    styleUrls: ['./interview-preparation.component.scss'],
    standalone: false
})
export class InterviewPreparationComponent implements OnInit {
  
  currentView: 'list' | 'detail' = 'list';
  selectedInterviewSet: InterviewSet | null = null;

  // Get data from the separate data file
  interviewSets: InterviewSet[] = INTERVIEW_SETS;
  githubRepository: GithubRepository = GITHUB_REPOSITORY;

  ngOnInit(): void {
    // Component initialization
  }

  onTabChange(): void {
    // Reset to list view when changing tabs
    this.currentView = 'list';
    this.selectedInterviewSet = null;
  }

  viewInterviewSet(set: InterviewSet): void {
    this.selectedInterviewSet = set;
    this.currentView = 'detail';
  }

  backToList(): void {
    this.currentView = 'list';
    this.selectedInterviewSet = null;
  }

  openGithubRepository(): void {
    window.open(this.githubRepository.url, '_blank');
  }
}
