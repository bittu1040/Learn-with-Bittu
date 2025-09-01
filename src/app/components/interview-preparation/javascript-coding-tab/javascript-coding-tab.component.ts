import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubRepository } from '../../../shared/interview-data';

@Component({
    selector: 'app-javascript-coding-tab',
    templateUrl: './javascript-coding-tab.component.html',
    styleUrls: ['./javascript-coding-tab.component.scss'],
    standalone: false
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
