import { Component, OnInit } from '@angular/core';
import { closureCodeSnippet, curryingCodeSnippet } from 'app/shared/code-snippets';
import { listOfQuestions } from 'app/shared/topics';
@Component({
  selector: 'app-javascript-articles',
  templateUrl: './javascript-articles.component.html',
  styleUrls: ['./javascript-articles.component.css']
})
export class JavascriptArticlesComponent implements OnInit {

  JSTopics: any;
  curryingCodeSnippet: string = curryingCodeSnippet;
  closureCodeSnippet: string = closureCodeSnippet;
  ngOnInit(): void {
    this.JSTopics = listOfQuestions.filter((data) => {
      return data.category == "javascript"
    })
  }

  copyToClipboard(codeSnippet: string) { // Accept the code snippet as a parameter
    const el = document.createElement('textarea');
    el.value = codeSnippet;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Code snippet copied to clipboard!');
  }
}
