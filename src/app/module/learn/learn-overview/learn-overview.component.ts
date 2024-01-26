import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContentComponent } from 'app/components/dialog-content/dialog-content.component';
import { angularTopics, commonInterviewTopics, javascriptTopics } from 'app/shared/topics';

@Component({
  selector: 'app-learn-overview',
  templateUrl: './learn-overview.component.html',
  styleUrls: ['./learn-overview.component.css']
})
export class LearnOverviewComponent {

  Topic="Angular";
  TopicDifficulty= "ALL"


  commonInterviewTopics= commonInterviewTopics;
  javascriptTopics= javascriptTopics;
  angularTopics= angularTopics;


  constructor(private router: Router, public dialog: MatDialog) { }

  goToHome() {
    this.router.navigateByUrl('/');
  }

  openDialog(title: string): void {
    this.dialog.open(DialogContentComponent, {
      // width: '400px',
      data: title 
    });
  }
}
