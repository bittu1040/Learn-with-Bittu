import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-vercal-angular-app';
  isMobile: boolean = false;
  showTree = true;
  
  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);
  }

  toggleTreeVisibility() {
    this.showTree = !this.showTree;
  }
}
