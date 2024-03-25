import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { closureCodeSnippet, curryingCodeSnippet, variableDeclarationSnippet } from 'app/shared/code-snippets';
import { listOfQuestions } from 'app/shared/topics';
@Component({
  selector: 'app-javascript-articles',
  templateUrl: './javascript-articles.component.html',
  styleUrls: ['./javascript-articles.component.css']
})
export class JavascriptArticlesComponent implements OnInit {

  JSTopics: any;
  activeTopicId: string | null = null;

  curryingCodeSnippet: string = curryingCodeSnippet;
  closureCodeSnippet: string = closureCodeSnippet;
  variableDeclarationSnippet: string=variableDeclarationSnippet;

  constructor(private router: Router, private el: ElementRef){}

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

  navigateToJSTopic(topic: string): void {
    const sanitizedTopic = topic.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    this.router.navigate(['/javascript-articles', topic]);
    this.activeTopicId = topic;
    const element = this.el.nativeElement.querySelector(`#${topic}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }
}
