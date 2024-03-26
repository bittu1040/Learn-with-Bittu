export interface Blog {
    title: string;
    articleLink: string;
    imageURL: string;
    description:string;
  }


  export const blogList: Blog[] = [
    {
      title: 'Promise methods',
      articleLink: 'https://medium.com/@bittukumar-web/promise-and-its-methods-all-race-any-allsettled-0dc677b5aee1',
      imageURL:    'https://miro.medium.com/v2/resize:fit:828/format:webp/1*9-HRbIEKQJtd9jQm1O8Flw.png',
      description: ""  
    },
    {
      title: 'OOPS concept',
      articleLink: 'https://medium.com/stackademic/object-oriented-programming-in-javascript-7e4e9b8d8b81',
      imageURL:    'https://miro.medium.com/v2/resize:fit:828/format:webp/1*1daRRKMwYBSUrbNl6-382A.png',
      description: ""
    },
    {
        title: 'Event delegation',
        articleLink: 'https://medium.com/@bittukumar-web/event-delegation-event-propagation-event-bubbling-and-event-capturing-324e4ee7240c',
        imageURL:    'https://miro.medium.com/v2/resize:fit:828/format:webp/1*8RPXYfJKMWXBjaG1VFIDRw.png',
        description: ""
    },
    {
        title: 'This and arrow function',
        articleLink: 'https://medium.com/@bittukumar-web/this-and-arrow-function-in-javascript-fd5f26f2c2f9',
        imageURL:    'https://miro.medium.com/v2/resize:fit:828/format:webp/1*xoGKkCXh0ngU23dI-urhIw.png',
        description: ""
    },
    {
        title: 'Hoisting in JavaScript',
        articleLink: 'https://medium.com/stackademic/lets-learn-hoisting-in-javascript-b2ba18de16dc',
        imageURL:    'https://miro.medium.com/v2/resize:fit:828/format:webp/1*sWsG-icStriNHzZNMMbbwA.png',
        description: ""
    },
    {
      title: 'Callback, Promise, Async-await',
      articleLink: 'https://medium.com/@bittukumar-web/callback-promise-and-async-await-example-in-javascript-7ef68d94486',
      imageURL:    'https://miro.medium.com/v2/resize:fit:828/format:webp/1*lpe4jpuhYr2dthrmg2wcnQ.png',
      description: ""
    },
    {
        title: 'Callback, Promise, Async-await',
        articleLink: 'https://medium.com/@bittukumar-web/callback-promise-and-async-await-in-javascript-a2dd624ea482',
        imageURL:    'https://miro.medium.com/v2/resize:fit:828/format:webp/1*6_lPnDPKC5YQbdi5ydxzmw.png',
        description: ""
    }

  ];