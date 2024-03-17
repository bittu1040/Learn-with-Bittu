import { Component, OnInit } from '@angular/core';
import { listOfQuestions } from 'app/shared/topics';
@Component({
  selector: 'app-javascript-articles',
  templateUrl: './javascript-articles.component.html',
  styleUrls: ['./javascript-articles.component.css']
})
export class JavascriptArticlesComponent implements OnInit {

  JSTopics: any;
  curryingCodeSnippet: string = `
function SumOfThee(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
     }
}

console.log(SumOfThee(2)(3)(4));  // 9
`;


  ngOnInit(): void {
    this.JSTopics = listOfQuestions.filter((data) => {
      return data.category == "javascript"
    })
  }

  copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.curryingCodeSnippet;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Code snippet copied to clipboard!');
  }
}
