import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubRepository } from '../../../shared/interview-data';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-javascript-coding-tab',
    templateUrl: './javascript-coding-tab.component.html',
    styleUrls: ['./javascript-coding-tab.component.scss'],
    imports: [MatCard, MatCardContent, MatButton, MatCardHeader, MatCardTitle]
})
export class JavascriptCodingTabComponent implements OnInit {
  @Input() githubRepository!: GithubRepository;
  @Output() openGithubRepository = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenGithubRepository(): void {
    this.openGithubRepository.emit();
  }
}
