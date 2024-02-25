export interface InterviewTopic {
  name: string;
  category: string;
  difficulty: string;
  showDescription?: boolean;
}

export interface InterviewTopic1 {
  chapter: string;
  listOfTopic: {
    name: string;
    details: {
      mainHeading: string;
      insideContent: {
          miniHeading: string;
          description: string;
          code: string;
        }[]
    }
  }[];
}

export const listOfQuestions: InterviewTopic[] = [
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
  { name: 'Functions and Scope', category: 'javascript', difficulty: 'easy', showDescription: false },
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
  { name: 'Component communication', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Directives (Structural, Attribute and Custom)', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Pipes (Pure, Impure, Built-in)', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Injectable and Singleton Services', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Dependency Injection', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'host listener and host binding', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'One way and two-way Data Binding', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Route/Auth Guards', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Lazy loading', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Template/Reactive Forms and Validations', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Observable and Promises', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'RXJS Operators', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Subject and behavior subject', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'HTTP (Req/Res) Interceptor', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: 'Change Detection and OnPush', category: 'angular', difficulty: 'medium', showDescription: false },
  { name: "dist and bundle", category: 'angular', difficulty: 'medium', showDescription: false }
];


export const listOfQuestions1: InterviewTopic1[] = [
  {
    "chapter": "basicwebquestion",
    "listOfTopic": [
      {
        "name": "Debounce and Throttle",
        "details": {
          "mainHeading": "Debounce and Throttle",
          "insideContent": [
            {
              "miniHeading": "Debounce and Throttle",
              "description": "Description for Debounce and Throttle.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Pure and impure pipe/function",
        "details": {
          "mainHeading": "Pure and impure pipe/function",
          "insideContent": [
            {
              "miniHeading": "Pure and impure pipe/function",
              "description": "Description for Pure and impure pipe/function.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Mutability and immutability",
        "details": {
          "mainHeading": "Mutability and immutability",
          "insideContent": [
            {
              "miniHeading": "Mutability and immutability",
              "description": "Description for Mutability and immutability.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Async and defer",
        "details": {
          "mainHeading": "Async and defer",
          "insideContent": [
            {
              "miniHeading": "Async and defer",
              "description": "Description for Async and defer.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "CORS",
        "details": {
          "mainHeading": "CORS",
          "insideContent": [
            {
              "miniHeading": "CORS",
              "description": "Description for CORS.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Web Performance Optimization",
        "details": {
          "mainHeading": "Web Performance Optimization",
          "insideContent": [
            {
              "miniHeading": "Web Performance Optimization",
              "description": "Description for Web Performance Optimization.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Responsive Web Design",
        "details": {
          "mainHeading": "Responsive Web Design",
          "insideContent": [
            {
              "miniHeading": "Responsive Web Design",
              "description": "Description for Responsive Web Design.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "What is microfrontend",
        "details": {
          "mainHeading": "What is microfrontend",
          "insideContent": [
            {
              "miniHeading": "What is microfrontend",
              "description": "Description for What is microfrontend.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Explain PWA and SPA",
        "details": {
          "mainHeading": "Explain PWA and SPA",
          "insideContent": [
            {
              "miniHeading": "Explain PWA and SPA",
              "description": "Description for Explain PWA and SPA.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Pre-processors - SCSS or LESS",
        "details": {
          "mainHeading": "Pre-processors - SCSS or LESS",
          "insideContent": [
            {
              "miniHeading": "Pre-processors - SCSS or LESS",
              "description": "Description for Pre-processors - SCSS or LESS.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "JWT",
        "details": {
          "mainHeading": "JWT",
          "insideContent": [
            {
              "miniHeading": "JWT",
              "description": "Description for JWT.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "localStorage/sessionStorage",
        "details": {
          "mainHeading": "localStorage/sessionStorage",
          "insideContent": [
            {
              "miniHeading": "localStorage/sessionStorage",
              "description": "Description for localStorage/sessionStorage.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "How to debug your frontend application",
        "details": {
          "mainHeading": "How to debug your frontend application",
          "insideContent": [
            {
              "miniHeading": "How to debug your frontend application",
              "description": "Description for How to debug your frontend application.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "OOPs concepts",
        "details": {
          "mainHeading": "OOPs concepts",
          "insideContent": [
            {
              "miniHeading": "OOPs concepts",
              "description": "Description for OOPs concepts.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Design Patterns",
        "details": {
          "mainHeading": "Design Patterns",
          "insideContent": [
            {
              "miniHeading": "Design Patterns",
              "description": "Description for Design Patterns.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "What you know about unit testing",
        "details": {
          "mainHeading": "What you know about unit testing",
          "insideContent": [
            {
              "miniHeading": "What you know about unit testing",
              "description": "Description for What you know about unit testing.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Understand different use cases of the Promises with respect to API handling (retry API, combine 2-3 API)",
        "details": {
          "mainHeading": "Understand different use cases of the Promises with respect to API handling (retry API, combine 2-3 API)",
          "insideContent": [
            {
              "miniHeading": "Understand different use cases of the Promises with respect to API handling (retry API, combine 2-3 API)",
              "description": "Description for Understand different use cases of the Promises with respect to API handling (retry API, combine 2-3 API).",
              "code": ""
            }
          ]
        }
      }
    ]
  },
  {
    "chapter": "javascript",
    "listOfTopic": [
      {
        "name": "Variable Declarations (var, let, const)",
        "details": {
          "mainHeading": "Variable Declarations (var, let, const)",
          "insideContent": [
            {
              "miniHeading": "Variable Declarations",
              "description": "Description for Variable Declarations.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Functions and Scope",
        "details": {
          "mainHeading": "Functions and Scope",
          "insideContent": [
            {
              "miniHeading": "Functions and Scope",
              "description": "Description for Functions and Scope.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Closures",
        "details": {
          "mainHeading": "Closures",
          "insideContent": [
            {
              "miniHeading": "Closures",
              "description": "Description for Closures.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Hoisting",
        "details": {
          "mainHeading": "Hoisting",
          "insideContent": [
            {
              "miniHeading": "Hoisting",
              "description": "Description for Hoisting.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Event loop (callstack, microtask, macrotask)",
        "details": {
          "mainHeading": "Event loop (callstack, microtask, macrotask)",
          "insideContent": [
            {
              "miniHeading": "Event loop (callstack, microtask, macrotask)",
              "description": "Description for Event loop (callstack, microtask, macrotask).",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Prototypes, prototype chain, Prototypal Inheritance",
        "details": {
          "mainHeading": "Prototypes, prototype chain, Prototypal Inheritance",
          "insideContent": [
            {
              "miniHeading": "Prototypes, prototype chain, Prototypal Inheritance",
              "description": "Description for Prototypes, prototype chain, Prototypal Inheritance.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Callback in JavaScript",
        "details": {
          "mainHeading": "Callback in JavaScript",
          "insideContent": [
            {
              "miniHeading": "Callback in JavaScript",
              "description": "Description for Callback in JavaScript.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Asynchronous JavaScript (Promises, async/await)",
        "details": {
          "mainHeading": "Asynchronous JavaScript (Promises, async/await)",
          "insideContent": [
            {
              "miniHeading": "Asynchronous JavaScript (Promises, async/await)",
              "description": "Description for Asynchronous JavaScript (Promises, async/await).",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "call, apply and bind",
        "details": {
          "mainHeading": "call, apply and bind",
          "insideContent": [
            {
              "miniHeading": "call, apply and bind",
              "description": "Description for call, apply and bind.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Explain \"this\" in JavaScript",
        "details": {
          "mainHeading": "Explain \"this\" in JavaScript",
          "insideContent": [
            {
              "miniHeading": "Explain \"this\" in JavaScript",
              "description": "Description for Explain \"this\" in JavaScript.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Document Object Model (DOM)",
        "details": {
          "mainHeading": "Document Object Model (DOM)",
          "insideContent": [
            {
              "miniHeading": "Document Object Model (DOM)",
              "description": "Description for Document Object Model (DOM).",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Template literals, Destructuring, Spread Operator, rest operator",
        "details": {
          "mainHeading": "Template literals, Destructuring, Spread Operator, rest operator",
          "insideContent": [
            {
              "miniHeading": "Template literals, Destructuring, Spread Operator, rest operator",
              "description": "Description for Template literals, Destructuring, Spread Operator, rest operator.",
              "code": ""
            }
          ]
        }
      }
    ]
  },
  {
    "chapter": "angular",
    "listOfTopic": [
      {
        "name": "Angular workflow",
        "details": {
          "mainHeading": "Angular workflow",
          "insideContent": [
            {
              "miniHeading": "Angular workflow",
              "description": "Description for Angular workflow.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Lifecycle hooks",
        "details": {
          "mainHeading": "Lifecycle hooks",
          "insideContent": [
            {
              "miniHeading": "Lifecycle hooks",
              "description": "Description for Lifecycle hooks.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Component communication",
        "details": {
          "mainHeading": "Component communication",
          "insideContent": [
            {
              "miniHeading": "Component communication",
              "description": "Description for Component communication.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Directives (Structural, Attribute and Custom)",
        "details": {
          "mainHeading": "Directives (Structural, Attribute and Custom)",
          "insideContent": [
            {
              "miniHeading": "Directives (Structural, Attribute and Custom)",
              "description": "Description for Directives (Structural, Attribute and Custom).",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Pipes (Pure, Impure, Built-in)",
        "details": {
          "mainHeading": "Pipes (Pure, Impure, Built-in)",
          "insideContent": [
            {
              "miniHeading": "Pipes (Pure, Impure, Built-in)",
              "description": "Description for Pipes (Pure, Impure, Built-in).",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Injectable and Singleton Services",
        "details": {
          "mainHeading": "Injectable and Singleton Services",
          "insideContent": [
            {
              "miniHeading": "Injectable and Singleton Services",
              "description": "Description for Injectable and Singleton Services.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Dependency Injection",
        "details": {
          "mainHeading": "Dependency Injection",
          "insideContent": [
            {
              "miniHeading": "Dependency Injection",
              "description": "Description for Dependency Injection.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "host listener and host binding",
        "details": {
          "mainHeading": "host listener and host binding",
          "insideContent": [
            {
              "miniHeading": "host listener and host binding",
              "description": "Description for host listener and host binding.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "One way and two-way Data Binding",
        "details": {
          "mainHeading": "One way and two-way Data Binding",
          "insideContent": [
            {
              "miniHeading": "One way and two-way Data Binding",
              "description": "Description for One way and two-way Data Binding.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Route/Auth Guards",
        "details": {
          "mainHeading": "Route/Auth Guards",
          "insideContent": [
            {
              "miniHeading": "Route/Auth Guards",
              "description": "Description for Route/Auth Guards.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Lazy loading",
        "details": {
          "mainHeading": "Lazy loading",
          "insideContent": [
            {
              "miniHeading": "Lazy loading",
              "description": "Description for Lazy loading.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Template/Reactive Forms and Validations",
        "details": {
          "mainHeading": "Template/Reactive Forms and Validations",
          "insideContent": [
            {
              "miniHeading": "Template/Reactive Forms and Validations",
              "description": "Description for Template/Reactive Forms and Validations.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Observable and Promises",
        "details": {
          "mainHeading": "Observable and Promises",
          "insideContent": [
            {
              "miniHeading": "Observable and Promises",
              "description": "Description for Observable and Promises.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "RXJS Operators",
        "details": {
          "mainHeading": "RXJS Operators",
          "insideContent": [
            {
              "miniHeading": "RXJS Operators",
              "description": "Description for RXJS Operators.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Subject and behavior subject",
        "details": {
          "mainHeading": "Subject and behavior subject",
          "insideContent": [
            {
              "miniHeading": "Subject and behavior subject",
              "description": "Description for Subject and behavior subject.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "HTTP (Req/Res) Interceptor",
        "details": {
          "mainHeading": "HTTP (Req/Res) Interceptor",
          "insideContent": [
            {
              "miniHeading": "HTTP (Req/Res) Interceptor",
              "description": "Description for HTTP (Req/Res) Interceptor.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Change Detection and OnPush",
        "details": {
          "mainHeading": "Change Detection and OnPush",
          "insideContent": [
            {
              "miniHeading": "Change Detection and OnPush",
              "description": "Description for Change Detection and OnPush.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "dist and bundle",
        "details": {
          "mainHeading": "dist and bundle",
          "insideContent": [
            {
              "miniHeading": "dist and bundle",
              "description": "Description for dist and bundle.",
              "code": ""
            }
          ]
        }
      }
    ]
  }
];

