import { Component, ElementRef, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { listOfQuestions } from './shared/topics';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DataSharingService } from './shared/data-sharing.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatDivider, MatNavList, MatListItem } from '@angular/material/list';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [MatToolbar, MatIconButton, MatIcon, RouterLink, MatAnchor, MatSidenavContainer, MatSidenav, MatExpansionPanel, MatExpansionPanelHeader, MatDivider, MatNavList, MatListItem, MatSidenavContent, RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'first-vercal-angular-app';
  isMobile: boolean = false;
  showTree = true;
  isSideNavOpened= true;

  JSTopics:any;
  AngularTopics:any;
  activeTopicId: string | null = null;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private el: ElementRef, private shared: DataSharingService) {
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
    this.router.navigate(['/javascript-articles', topic]);
    this.shared.activeTopicIdShared.next(topic);
    const element = this.el.nativeElement.querySelector(`#${topic}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }


  navigateToAngularTopic(topic: string): void {
    const sanitizedTopic = topic.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    this.router.navigate(['/angular-articles', sanitizedTopic]);
    this.shared.activeTopicIdShared.next(topic);
    const element = this.el.nativeElement.querySelector(`#${topic}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }
}
