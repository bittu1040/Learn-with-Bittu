import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent {

  @Input() codeSnippet: string = '';
  @Input() copyButton: boolean = true;

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
