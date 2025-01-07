import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  questions: string[] = [
    'Write a program to reverse a string without using the reverse() method.',
    'What is a generator function in JavaScript? How does it work?',
    'Explain closures in JavaScript.',
    'What are higher-order components in React?',
    'Explain the difference between state and props in React.',
    'What is a Callback function?',
    'Explain the spread operator in JavaScript.',
    'What is the difference between a shallow copy and a deep copy? How do you create each type in JavaScript?',
    'What is the Virtual DOM in React, and how does it help?',
    'lorem100 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec pur lorem100 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur   '
  ];

}
