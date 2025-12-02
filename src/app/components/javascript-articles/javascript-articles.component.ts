import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestAndDestructuringSnippet, closureCodeSnippet, curryingCodeSnippet, deepCopySnippet, shallowCopySnippet, variableDeclarationSnippet } from '@app/shared/code-snippets';
import { DataSharingService } from '@shared/data-sharing.service';
import { listOfQuestions } from '@app/shared/topics';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDivider } from '@angular/material/list';
import { NgClass } from '@angular/common';
import { CodeSnippetComponent } from 'angular-code-snippet';
@Component({
    selector: 'app-javascript-articles',
    templateUrl: './javascript-articles.component.html',
    styleUrls: ['./javascript-articles.component.scss'],
    imports: [MatIcon, FormsModule, MatDivider, NgClass, CodeSnippetComponent]
})
export class JavascriptArticlesComponent implements OnInit {

  JSTopics: any;
  activeTopicId: string | null = null;

  copyButton:boolean= true;
  searchQuery: string = '';

  curryingCodeSnippet: string = curryingCodeSnippet;
  closureCodeSnippet: string = closureCodeSnippet;
  variableDeclarationSnippet: string=variableDeclarationSnippet;
  RestAndDestructuringSnippet: string= RestAndDestructuringSnippet;
  shallowCopySnippet: string= shallowCopySnippet;
  deepCopySnippet: string= deepCopySnippet;

  constructor(private router: Router, private el: ElementRef, private shared: DataSharingService){}

  ngOnInit(): void {
    this.JSTopics = listOfQuestions.filter((data) => {
      return data.category == "javascript"
    })

    this.shared.activeTopicIdShared.subscribe((data)=>{
      this.activeTopicId= data;
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
    this.shared.activeTopicIdShared.next(topic);
    const element = this.el.nativeElement.querySelector(`#${topic}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }

  get filteredTopics() {
    return this.JSTopics
      .filter((topic: any) => topic.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
      .sort(((a:any, b:any) => a.name.localeCompare(b.name)))
  }
}
