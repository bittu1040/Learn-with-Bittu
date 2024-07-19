import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor(private http: HttpClient) { }

  topicName: Subject<any> = new BehaviorSubject("");
  activeTopicIdShared: Subject<string> = new BehaviorSubject("");

  getCountriesList(){
    return this.http.get('https://restcountries.com/v3.1/all')
  }

  getProductList(){
    return this.http.get('https://fakestoreapi.com/products?limit=9')
  }

}
