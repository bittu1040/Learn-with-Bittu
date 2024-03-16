import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { listOfQuestions } from './shared/topics';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-vercal-angular-app';
  isMobile: boolean = false;
  showTree = true;
  isSideNavOpened= true;

  JSTopics:any;
  AngularTopics:any;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);
    if(this.isMobile){
      this.isSideNavOpened= false;
    }
  }

  toggleTreeVisibility() {
    this.showTree = !this.showTree;
  }

  ngOnInit(): void {
    this.JSTopics= listOfQuestions.filter((data)=>{
      return data.category=="javascript"
    })
    this.AngularTopics= listOfQuestions.filter((data)=>{
      return data.category=="angular"
    })

  }


  navigateToJSTopic(topic: string): void {
    const sanitizedTopic = topic.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    this.router.navigate(['/javascript-articles', sanitizedTopic]);
  }


  navigateToAngularTopic(topic: string): void {
    const sanitizedTopic = topic.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    this.router.navigate(['/angular-articles', sanitizedTopic]);
  }
}
