export interface InterviewTopic {
  id: string,
  name: string;
  category: string;
  difficulty: string;
  showDescription?: boolean;
}

export interface InterviewTopic1 {
  chapter: string;
  listOfTopic: {
    name: string;
    showDescription: boolean;
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
  { id: 'debounce-and-throttle', name: 'Debounce and Throttle', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'pure-and-impure-pipe-function', name: 'Pure and impure pipe/function', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'mutability-and-immutability', name: 'Mutability and immutability', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'async-and-defer', name: 'Async and defer', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'cors', name: 'CORS', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'web-performance-optimization', name: 'Web Performance Optimization', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'responsive-web-design', name: 'Responsive Web Design', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'what-is-microfrontend', name: 'What is microfrontend', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'explain-pwa-and-spa', name: 'Explain PWA and SPA', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'pre-processors-scss-or-less', name: 'Pre-processors - SCSS or LESS', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'jwt', name: 'JWT', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'localstorage-sessionstorage', name: 'localStorage/sessionStorage', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'how-to-debug-your-frontend-application', name: 'How to debug your frontend application', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'oops-concepts', name: 'OOPs concepts', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'design-patterns', name: 'Design Patterns', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'what-you-know-about-unit-testing', name: 'What you know about unit testing', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },
  { id: 'understand-different-use-cases-of-the-promises-with-respect-to-api-handling', name: 'Understand different use cases of the Promises with respect to API handling (retry API, combine 2-3 API)', category: 'basicwebquestion', difficulty: 'medium', showDescription: false },

  { id: 'variable-declarations', name: 'Variable Declarations (var, let, const)', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'functions-and-scope', name: 'Functions and Scope', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'closures', name: 'Closures', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'hoisting', name: 'Hoisting', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'currying', name: 'Currying', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'comparison-operators', name: 'comparision-operators', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'array-methods', name: 'array-methods', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'event-loop-callstack-microtask-macrotask', name: 'Event loop (callstack, microtask, macrotask)', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'prototypes-prototype-chain-prototypal-inheritance', name: 'Prototypes, prototype chain, Prototypal Inheritance', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'callback-in-javascript', name: 'Callback in JavaScript', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'asynchronous-javascript-promises-async-await', name: 'Asynchronous JavaScript (Promises, async/await)', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'promise-methods', name: 'Promise methods', category: 'javascript', difficulty: 'medium', showDescription: false },
  { id: 'call-apply-and-bind', name: 'call, apply and bind', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'explain-this-in-javascript', name: 'Explain "this" in JavaScript', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'document-object-model-dom', name: 'Document Object Model (DOM)', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'template-literals-destructuring-spread-operator-rest-operator', name: 'Template literals, Destructuring, Spread Operator, rest operator', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'ES6-feature', name: 'ES6 feature', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'async-and-defer', name: 'Async and defer', category: 'javascript', difficulty: 'medium', showDescription: false },
  { id: 'event-delegation-and-event-propagation', name: 'Event delegation and event propagation ', category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'debounce-and-throttle', name: 'Debounce and Throttle', category: 'javascript', difficulty: 'medium', showDescription: false },
  { id: 'oops-in-javascript', name: 'OOPS in JavaScript', category: 'javascript', difficulty: 'medium', showDescription: false },
  { id: 'design-pattern-in-javscript', name: "Design Pattern in JavaScript", category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'webpack', name: "webpack", category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'deep-copy-shallow-copy', name: "Deep Copy and Shallow Copy", category: 'javascript', difficulty: 'easy', showDescription: false },
  { id: 'frequently-asked-questions', name: 'Frequently Asked Questions', category: 'javascript', difficulty: 'easy', showDescription: false },

  { id: 'angular-workflow', name: 'Angular workflow', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'lifecycle-hooks', name: 'Lifecycle hooks', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'component-communication', name: 'Component communication', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'directives', name: 'Directives (Structural, Attribute and Custom)', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'pipes', name: 'Pipes (Pure, Impure, Built-in)', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'injectable-and-singleton-services', name: 'Injectable and Singleton Services', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'dependency-injection', name: 'Dependency Injection', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'host-listener-and-host-binding', name: 'host listener and host binding', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'one-way-and-two-way-data-binding', name: 'One way and two-way Data Binding', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'route-auth-guards', name: 'Route/Auth Guards', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'lazy-loading', name: 'Lazy loading', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'template-reactive-forms-and-validations', name: 'Template/Reactive Forms and Validations', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'observable-and-promises', name: 'Observable and Promises', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'rxjs-operators', name: 'RXJS Operators', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'subject-and-behavior-subject', name: 'Subject and behavior subject', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'http-interceptor', name: 'HTTP (Req/Res) Interceptor', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'change-detection-and-onpush', name: 'Change Detection and OnPush', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'dist-and-bundle', name: 'dist and bundle', category: 'angular', difficulty: 'medium', showDescription: false },
  { id: 'unit-testing', name: 'Unit Testing', category: 'angular', difficulty: 'medium', showDescription: false },
];


export const listOfQuestions1: InterviewTopic1[] = [
  {
    "chapter": "basicwebquestion",
    "listOfTopic": [
      {
        "name": "Debounce and Throttle",
        "showDescription": false,
        "details": {
          "mainHeading": "Debounce and Throttle",
          "insideContent": [
            {
              "miniHeading": "Debounce and Throttle",
              "description": "Lorem  <strong>bold</strong> ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi, reiciendis mollitia magnam similique temporibus dolorum eius sint, earum ad quidem error culpa sequi placeat itaque exercitationem maxime. Dicta natus et perferendis.",
              "code": ""
            },
            {
              "miniHeading": "Debounce and Throttle",
              "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi, reiciendis mollitia magnam similique temporibus dolorum eius sint, earum ad quidem error culpa sequi placeat itaque exercitationem maxime. Dicta natus et perferendis.",
              "code": ""
            }
          ]
        }
      },
      {
        "name": "Pure and impure pipe/function",
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "name": "Promises with respect to API handling (retry API, combine 2-3 API)",
        "showDescription": false,
        "details": {
          "mainHeading": "Promises with respect to API handling (retry API, combine 2-3 API)",
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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
        "showDescription": false,
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


