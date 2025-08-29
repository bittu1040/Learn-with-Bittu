import { Component, ElementRef, OnInit } from '@angular/core';
import { listOfQuestions } from '../../shared/topics';
import { Router } from '@angular/router';
import { DataSharingService } from 'app/shared/data-sharing.service';

@Component({
  selector: 'app-angular-articles',
  templateUrl: './angular-articles.component.html',
  styleUrls: ['./angular-articles.component.scss']
})
export class AngularArticlesComponent implements OnInit {

  AngularTopics:any;
  activeTopicId: string | null = null;
  searchQuery: string = '';


  constructor(private router: Router, private el: ElementRef, private shared: DataSharingService) { }

  ngOnInit(): void {
    this.AngularTopics= listOfQuestions.filter((data)=>{
      return data.category=="angular"
    })

    this.shared.activeTopicIdShared.subscribe((data)=>{
      this.activeTopicId= data;
    })
  }


  navigateToAngularTopic(topic: string): void {
    const sanitizedTopic = topic.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    this.router.navigate(['/angular-articles', topic]);
    this.shared.activeTopicIdShared.next(topic);
    const element = this.el.nativeElement.querySelector(`#${topic}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }

  get filteredTopics() {
    return this.AngularTopics.filter((topic:any) => topic.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
}

}
