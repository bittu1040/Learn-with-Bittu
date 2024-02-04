export interface InterviewTopic {
  name: string;
  category: string;
  difficulty: string;
  showDescription?: boolean;
}

export const listOfQuestions:InterviewTopic[] = [
  { name: 'Debounce and Throttle', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'Pure and impure pipe/function', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'Mutability and immutability', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'Async and defer', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'CORS', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'Web Performance Optimization', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'Responsive Web Design', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'What is microfrontend', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'Explain PWA and SPA', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'Pre-processors - SCSS or LESS', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'JWT', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'localStorage/sessionStorage', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'How to debug your frontend application', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'OOPs concepts', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'Design Patterns', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'What you know about unit testing', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { name: 'Understand different use cases of the Promises with respect to API handling (retry API, combine 2-3 API)', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  
  { name: 'Variable Declarations (var, let, const)', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'Functions and Scope', category: 'javascript', difficulty: 'easy' , showDescription: false},
  { name: 'Closures', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'Hoisting', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'Event loop (callstack, microtask, macrotask)', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'Prototypes, prototype chain, Prototypal Inheritance', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'Callback in JavaScript', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'Asynchronous JavaScript (Promises, async/await)', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'call, apply and bind', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'Explain "this" in JavaScript', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'Document Object Model (DOM)', category: 'javascript', difficulty: 'easy', showDescription: false },
  { name: 'Template literals, Destructuring, Spread Operator, rest operator', category: 'javascript', difficulty: 'easy', showDescription: false },
  
  { name: 'Angular workflow', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Lifecycle hooks', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Component communication', category: 'angular', difficulty: 'medium' , showDescription: false},
  { name: 'Directives (Structural, Attribute and Custom)', category: 'angular', difficulty: 'medium' ,showDescription: false},
  { name: 'Pipes (Pure, Impure, Built-in)', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Injectable and Singleton Services', category: 'angular', difficulty: 'medium' , showDescription: false},
  { name: 'Dependency Injection', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'One way and two-way Data Binding', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Route/Auth Guards', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Lazy loading', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Template/Reactive Forms and Validations', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Observable and Promises', category: 'angular', difficulty: 'medium' , showDescription: false},
  { name: 'RXJS Operators', category: 'angular', difficulty: 'medium' , showDescription: false},
  { name: 'Subject and behavior subject', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'HTTP (Req/Res) Interceptor', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Change Detection and OnPush', category: 'angular', difficulty: 'medium', showDescription: false }
];
