export interface InterviewQuestion {
  id: number;
  question: string;
  category: string;
}

export interface InterviewSet {
  id: number;
  title: string;
  company?: string;
  date?: string;
  totalQuestions: number;
  questions?: InterviewQuestion[];
}

export interface GithubRepository {
  name: string;
  url: string;
  description: string;
  features: string[];
  sections: {
    name: string;
    description: string;
    topics: string[];
  }[];
}

export const INTERVIEW_SETS: InterviewSet[] = [
  {
    id: 1,
    title: "Angular Fundamentals - First Round Interview",
    company: "MNC Company",
    date: "2024",
    totalQuestions: 20,
    questions: [
      { id: 1, question: "What is Angular and how is it different from AngularJS?", category: "Angular" },
      { id: 2, question: "What are the different types of data binding in Angular?", category: "Angular" },
      { id: 3, question: "How do you implement two-way data binding?", category: "Angular" },
      { id: 4, question: "What are Angular Directives? Name some built-in directives.", category: "Angular" },
      { id: 5, question: "How do you create a custom directive in Angular?", category: "Angular" },
      { id: 6, question: "What is the difference between pure pipes and impure pipes?", category: "Angular" },
      { id: 7, question: "What are Angular Services? How do you create and use them?", category: "Angular" },
      { id: 8, question: "Explain how Dependency Injection works in Angular.", category: "Angular" },
      { id: 9, question: "How do you configure routes in Angular?", category: "Angular" },
      { id: 10, question: "Explain lazy loading and how to implement it.", category: "Angular" },
      { id: 11, question: "How do you handle form validation in Angular?", category: "Angular" },
      { id: 12, question: "How do you perform HTTP requests in Angular?", category: "Angular" },
      { id: 13, question: "What is the purpose of HttpInterceptor?", category: "Angular" },
      { id: 14, question: "What are Observables in Angular?", category: "RxJS" },
      { id: 15, question: "How do you use RxJS in Angular?", category: "RxJS" },
      { id: 16, question: "How do you optimize the performance of an Angular application?", category: "Performance" },
      { id: 17, question: "What are Angular change detection strategies?", category: "Performance" },
      { id: 18, question: "What is the difference between an Observable and a Promise?", category: "RxJS" },
      { id: 19, question: "Name a few RxJS operators that you use.", category: "RxJS" },
      { id: 20, question: "Have you worked on unit testing before?", category: "Testing" }
    ]
  },
  {
    id: 2,
    title: "Frontend Developer Interview - MNC Company",
    company: "MNC Company",
    date: "November 2024",
    totalQuestions: 15,
    questions: [
      // Section 1: Angular & Web Development Concepts
      { id: 1, question: "What is ng-content and how does content projection work?", category: "Angular" },
      { id: 2, question: "How do @ViewChild and @ContentChild differ?", category: "Angular" },
      { id: 3, question: "Explain Dependency Injection in Angular.", category: "Angular" },
      { id: 4, question: "How does Angular load dynamic components, and what's the project structure?", category: "Angular" },
      { id: 5, question: "What is the PipeTransform interface?", category: "Angular" },
      { id: 6, question: "How does Angular bootstrapping work via AppModule?", category: "Angular" },
      { id: 7, question: "What is an HTTP interceptor? Common use cases?", category: "HTTP" },
      { id: 8, question: "What is GraphQL? How does it compare to REST?", category: "APIs" },
      { id: 9, question: "Use Apollo in Angular to fetch GraphQL data", category: "GraphQL" },
      { id: 10, question: "Differences: BehaviorSubject, Subject, ReplaySubject", category: "RxJS" },
      { id: 11, question: "Explain: switchMap, mergeMap, concatMap, exhaustMap", category: "RxJS" },
      
      // Section 2: HTML & Practical Implementation
      { id: 12, question: "Design a semantic HTML navigation menu.", category: "HTML" },
      { id: 13, question: "List 5 semantic HTML tags and their uses.", category: "HTML" },
      { id: 14, question: "Fetch API data and display in a table with: Search by name (Reactive Form), Error handling (show message on API failure)", category: "Practical" },
      
      // Section 3: JavaScript Coding Challenge
      { id: 15, question: "Flatten a nested array: const input = [1, [2, [3, [4]], 5]]; // Output: [1, 2, 3, 4, 5]", category: "JavaScript" }
    ]
  },
  {
    id: 3,
    title: "Angular Developer Interview - MNC Company",
    company: "MNC Company",
    date: "January 2025",
    totalQuestions: 10,
    questions: [
      // Section 1: Angular Architecture & Performance
      { id: 1, question: "Design a component with 3 tabs in angular — Product Details, Products, Sales Info. How will you handle large data in the Sales tab: pagination or infinite scroll?", category: "Angular" },
      { id: 2, question: "If your frontend angular app is slow, how will you debug and improve its performance?", category: "Performance" },
      
      // Section 2: JavaScript Implementation
      { id: 3, question: "How would you recreate Angular's [(ngModel)] behavior in plain JavaScript?", category: "JavaScript" },
      { id: 4, question: "You have 4 nested divs — clicking any div should alert its level (e.g., div 3 shows 3). How do you implement this?", category: "JavaScript" },
      
      // Section 3: CSS & Responsive Design
      { id: 5, question: "What do you use for responsive design and what is your approach towards it?", category: "CSS" },
      { id: 6, question: "Using Bootstrap classes, show 4 divs in a row on large screens, and 2 in a row on small screens.", category: "Bootstrap" },
      { id: 7, question: "Explain the different values of position in CSS — relative, absolute, fixed, sticky.", category: "CSS" },
      { id: 8, question: "You have 10 boxes with 200*200px. How will you color them alternatively blue and yellow using CSS only?", category: "CSS" },
      
      // Coding Section: JavaScript Algorithms
      { id: 9, question: "Find and print the name(s) of user(s) whose age is greater than 30 in nested object: const users = { user1: { name: 'Alice', age: 25 }, user2: { name: 'Bob', age: 30 }, user3: { personal: { name: 'Charlie', age: 35 }, job: { title: 'Engineer' } } };", category: "JavaScript" },
      { id: 10, question: "Remove duplicates from an array: const arr = [11, 2, 2, 33, 11, 34, 2, 5, 11, 22];", category: "JavaScript" }
    ]
  },
  {
    id: 4,
    title: "Angular Developer Interview - MNC Company",
    company: "MNC Company",
    date: "February 2025",
    totalQuestions: 10,
    questions: [
      // Section 1: Angular Core Concepts
      { id: 1, question: "How does an Angular application bootstrap?", category: "Angular" },
      { id: 2, question: "How many types of directives are there in Angular?", category: "Angular" },
      { id: 3, question: "How do we share one method of one component into another component, using ViewChild?", category: "Angular" },
      { id: 4, question: "How do pipes work in Angular?", category: "Angular" },
      { id: 5, question: "How does lazy loading work in Angular?", category: "Angular" },
      
      // Section 2: JavaScript Fundamentals
      { id: 6, question: "What is hoisting in JavaScript?", category: "JavaScript" },
      { id: 7, question: "What is the difference between let and var?", category: "JavaScript" },
      { id: 8, question: "What is a closure in JavaScript?", category: "JavaScript" },
      { id: 9, question: "What is memoization?", category: "JavaScript" },
      
      // Coding Section: Array Processing Algorithm
      { id: 10, question: "Given an array of string arrays, pick the smallest string from each subarray, then return those strings sorted by length.", category: "Algorithms" }
    ]
  },
  {
    id: 5,
    title: "Senior Frontend Developer - MNC Company",
    company: "MNC Company",
    date: "March 2025",
    totalQuestions: 14,
    questions: [
      // Section 1: TypeScript & Advanced JavaScript Concepts
      { id: 1, question: "What is the difference between JavaScript and TypeScript?", category: "TypeScript" },
      { id: 2, question: "How do you run TypeScript code in a Node environment?", category: "TypeScript" },
      { id: 3, question: "What is the static keyword in TypeScript? -- static members belong to the class, not to its instances", category: "TypeScript" },
      { id: 4, question: "What is the difference between readonly and const in TypeScript?", category: "TypeScript" },
      { id: 5, question: "How does const behave with object mutation?", category: "JavaScript" },
      { id: 6, question: "How do you fix an error when calling methods on an unknown type in TypeScript? Example: let x: unknown = 'Hello'; console.log(x.toUpperCase()); // Error", category: "TypeScript" },
      { id: 7, question: "What is the output of the BehaviorSubject example with multiple subscriptions and next() calls?", category: "RxJS" },
      { id: 8, question: "What will be output: if (true) { this.var2 = 'Hello2'; } console.log(var2); // Hello2", category: "JavaScript" },
      
      // Section 2: Angular Routing & Testing
      { id: 9, question: "What are Auth Guards in Angular and how are they used?", category: "Angular" },
      { id: 10, question: "How do you access route parameters in Angular?", category: "Angular" },
      { id: 11, question: "What is the difference between paramMap and snapshot in Angular routing?", category: "Angular" },
      { id: 12, question: "How do you define a route in Angular with a dynamic parameter?", category: "Angular" },
      { id: 13, question: "What is Jasmine and Karma in Angular projects and Write a simple Jasmine test case to check a function that adds two numbers.", category: "Testing" },
      
      // Section 3: Coding Challenge
      { id: 14, question: "Write a function to reverse an integer while preserving its sign. Examples: 123 -> 321, -123 -> -321, 120 -> 21", category: "Algorithms" }
    ]
  },
  {
    id: 6,
    title: "Advanced Angular Developer - MNC Company",
    company: "MNC Company",
    date: "December 2024",
    totalQuestions: 14,
    questions: [
      // Section 1: Theoretical Questions
      { id: 1, question: "Explain the difference between switchMap, mergeMap, concatMap, and exhaustMap.", category: "RxJS" },
      { id: 2, question: "What techniques do you use to reduce Angular bundle size?", category: "Performance" },
      { id: 3, question: "What are XSS attacks, and how do you secure Angular applications from them?", category: "Security" },
      { id: 4, question: "What accessibility (a11y) best practices do you follow in Angular?", category: "Accessibility" },
      { id: 5, question: "Compare template-driven vs reactive forms. Which one do you prefer and why?", category: "Forms" },
      { id: 6, question: "What is the role of TestBed in Angular unit testing?", category: "Testing" },
      { id: 7, question: "How do you test a directive that detects clicks outside of its host element?", category: "Testing" },
      { id: 8, question: "How do you test parent-child components that use @Input and @Output bindings?", category: "Testing" },
      
      // Section 2: Practical Implementation
      { id: 9, question: "How do you cancel an ongoing HTTP request when a component is destroyed?", category: "RxJS" },
      { id: 10, question: "Build a search component that calls an API while typing and cancels previous requests if a new one is triggered.", category: "RxJS" },
      { id: 11, question: "Create a custom pipe to format large numbers (e.g., 1,000,000 → 1M). Then make it impure and explain when that's useful.", category: "Pipes" },
      { id: 12, question: "Write a custom async validator that checks if an email is already taken (simulate it with a fake API).", category: "Forms" },
      
      // Section 3: Coding Questions
      { id: 13, question: "Flatten an array: Input [1,2,[3,4],5] Output [1,2,3,4,5]", category: "JavaScript" },
      { id: 14, question: "Group by Property: Given an array of objects, group them by a specified property.", category: "JavaScript" }
    ]
  }
];

export const GITHUB_REPOSITORY: GithubRepository = {
  name: "JavaScript-Coding-and-Notes",
  url: "https://github.com/bittu1040/JavaScript-Coding-and-Notes",
  description: "Comprehensive JavaScript learning repository with 310+ stars",
  features: [
    "JavaScript Core Concepts with Examples",
    "Coding Challenges and Solutions", 
    "Interview Questions for Practice",
    "Design Patterns in JavaScript",
    "HTML/CSS Layout Examples"
  ],
  sections: [
    {
      name: "JS Topics",
      description: "Fundamental JavaScript concepts",
      topics: [
        "Closure & Currying", "Hoisting & Scope Chain", "Prototypal Inheritance",
        "Promise & Async-Await", "Call, Apply & Bind", "Debounce & Throttle",
        "Deep Copy & Shallow Copy", "Event Delegation", "Memoization"
      ]
    },
    {
      name: "JS Code Challenges", 
      description: "JavaScript coding challenges with solutions",
      topics: [
        "Array Manipulation", "String Problems", "Object Operations",
        "Algorithm Challenges", "Data Structure Problems"
      ]
    },
    {
      name: "HTML-CSS Layout",
      description: "Frontend layout techniques and examples",
      topics: [
        "Flexbox Layouts", "CSS Grid", "Responsive Design", "CSS Animations"
      ]
    }
  ]
};
