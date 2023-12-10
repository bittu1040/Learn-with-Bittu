import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContentComponent } from 'app/components/dialog-content/dialog-content.component';

@Component({
  selector: 'app-learn-overview',
  templateUrl: './learn-overview.component.html',
  styleUrls: ['./learn-overview.component.css']
})
export class LearnOverviewComponent {


  commonInterviewTopics: string[] = [
    'Debounce and Throttle',
    'Pure and impure pipe/function',
    'Mutability and immutability',
    'Async and defer',
    'CORS',
    'Web Performance Optimation',
    'Responsive Web Design',
    'What is microfrontend',
    'Explain PWA and SPA',
    'Pre-processors - SCSS or LESS',
    'JWT',
    'localStorage/sessionStorage',
    'How to debug your frontend application',
    'OOPs concepts',
    'Design Patterns',
    'What you know about unit testing'


  ]

  javascriptTopics: string[] = [
    'Variable Declarations (var, let, const)',
    'Functions and Scope',
    'Closures',
    'Hoisting',
    'Event loop (callstack, microtask, macrotask)',
    'Prototypes, prototype chain, Prototypal Inheritance',
    'Callback in JavaScript',
    'Asynchronous JavaScript (Promises, async/await)',
    'call, apply and bind',
    'Explain "this" in JavaScript',
    'Document Object Model (DOM)',
    'Template literals, Destructuring, Spread Operator',
    ''
  ];

  angularTopics: string[] = [
    'Angular workflow',
    'Lifecycle hooks',
    'Component communication',
    'Directives (Structural, Attribute and Custom)',
    'Pipes (Pure, Impure, Built-in)',
    'Injectable and Singleton Services',
    'Dependency Injection',
    'One way and two way Data Binding',
    'Route/Auth Guards',
    'Lazy loading',
    'Template/Reactive Forms and Validations',
    'Observable and Promises',
    'RXJS Operators',
    'Subject and behavior subject',
    'HTTP (Req/Res) Interceptor',
    'Change Detection and OnPush',
    ''
  ];


  constructor(private router: Router, public dialog: MatDialog) { }

  goToHome() {
    this.router.navigateByUrl('/');
  }

  openDialog(title: string): void {
    this.dialog.open(DialogContentComponent, {
      // width: '400px',
      data: title 
    });
  }
}
