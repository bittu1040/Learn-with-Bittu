import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-js',
  templateUrl: './learn-js.component.html',
  styleUrls: ['./learn-js.component.css']
})
export class LearnJSComponent {

  TopicList= ["topic 1", "topic2", "topic3"];

  Submit(data:string){
    console.log(data)
  }

}
