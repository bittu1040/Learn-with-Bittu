import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  topicName: Subject<any> = new BehaviorSubject("");
  activeTopicIdShared: Subject<string> = new BehaviorSubject("");

}
