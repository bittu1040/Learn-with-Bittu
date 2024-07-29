import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor(private http: HttpClient) { }

  topicName: Subject<any> = new BehaviorSubject("");
  activeTopicIdShared: Subject<string> = new BehaviorSubject("");

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';


  getCountriesList(){
    return this.http.get('https://restcountries.com/v3.1/all')
  }

  getProductList(){
    return this.http.get('https://fakestoreapi.com/products?limit=9')
  }

  getPost(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
