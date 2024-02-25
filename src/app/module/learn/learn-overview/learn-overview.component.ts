import { Component, OnInit } from '@angular/core';
import { InterviewTopic1, listOfQuestions, listOfQuestions1 } from 'app/shared/topics';

@Component({
  selector: 'app-learn-overview',
  templateUrl: './learn-overview.component.html',
  styleUrls: ['./learn-overview.component.css'],
})
export class LearnOverviewComponent implements OnInit {
  title1 = 'Basic Web Question';
  title2 = 'JavaScript Interview Topics';
  title3 = 'Angular Interview Topics';


  basicwebquestion: boolean = false;
  jsquestion: boolean = false;
  angularquestion: boolean = true;

  selectedTopic: string = "Angular";

  selectedChapter: string = "";
  selectedTopic1: string = "";
  allData: InterviewTopic1[] = listOfQuestions1;
  showDescription: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getChapter();
    console.log(this.selectedChapter);
    this.getListOfTopic();
  }

  updateTopics(event: Event) {
    this.selectedTopic = (event.target as HTMLSelectElement).value;
    console.log(this.selectedTopic)
  }






  updateTopics1(event: Event) {
    this.selectedChapter = (event.target as HTMLSelectElement).value;
    console.log(this.selectedChapter);
    this.getListOfTopic();
  }

  allChapter: string[] = [];
  listOfTopic: any = [];

  getChapter() {
    for (let data of listOfQuestions1) {
      this.allChapter.push(data.chapter)
      this.selectedChapter = this.allChapter[0]   
     }
  }

  getListOfTopic() {
    this.listOfTopic = []
    for (let data of listOfQuestions1) {
      console.log(this.selectedChapter)
      if (this.selectedChapter === data.chapter) {
        for(let topic of data.listOfTopic){
          this.listOfTopic.push(topic)
        }
      }
    }
  }

  showDetails(topic: string) {
    if (this.selectedTopic1 === topic) {
      // If the clicked topic is already selected, toggle the description visibility
      this.showDescription = !this.showDescription;
    } else {
      // If a different topic is clicked, set it as the selected topic and show its description
      this.selectedTopic1 = topic;
      this.showDescription = true;
    }
  }
}
