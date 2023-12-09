import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn-overview',
  templateUrl: './learn-overview.component.html',
  styleUrls: ['./learn-overview.component.css']
})
export class LearnOverviewComponent {

  constructor(private router: Router){}

  goToHome(){
    this.router.navigateByUrl('/');
  }
}
