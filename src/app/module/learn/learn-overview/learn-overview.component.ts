import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-overview',
  templateUrl: './learn-overview.component.html',
  styleUrls: ['./learn-overview.component.scss'],
})
export class LearnOverviewComponent implements OnInit {
  title1 = 'Basic Web Question';
  title2 = 'JavaScript Interview Topics';
  title3 = 'Angular Interview Topics';
  listOfQuestions1:any[]=[]


  basicwebquestion: boolean = false;
  jsquestion: boolean = false;
  angularquestion: boolean = true;

  selectedTopic: string = "Angular";

  selectedChapter: string = "";
  selectedTopic1: string = "";
  allData: any[] = this.listOfQuestions1;
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
    for (let data of this.listOfQuestions1) {
      this.allChapter.push(data.chapter)
      this.selectedChapter = this.allChapter[0]   
     }
  }

  getListOfTopic() {
    this.listOfTopic = []
    for (let data of this.listOfQuestions1) {
      console.log(this.selectedChapter)
      if (this.selectedChapter === data.chapter) {
        for(let topic of data.listOfTopic){
          this.listOfTopic.push(topic)
        }
      }
    }
  }

  toggleDescription(topic: any) {
    topic.showDescription = !topic.showDescription;
  }
}
