import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-preparation',
  templateUrl: './interview-preparation.component.html',
  styleUrls: ['./interview-preparation.component.scss']
})
export class InterviewPreparationComponent implements OnInit {

  searchQuery: string = '';

  ngOnInit(): void {
    
  }
  filterQuestions(): void {
    const query = this.searchQuery.toLowerCase();
    const lists = ['frontend-questions', 'javascript-questions', 'angular-questions', 'html-css-questions', 'typescript-questions', 'projects', 'recent-work-list'];

    lists.forEach(listId => {
      const list = document.getElementById(listId);
      if (list) {
        const items = list.getElementsByTagName('li');
        Array.from(items).forEach(item => {
          const text = item.textContent?.toLowerCase() || '';
          item.style.display = text.includes(query) ? '' : 'none';
        });
      }
    });
  }

}
