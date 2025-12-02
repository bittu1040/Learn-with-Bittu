import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardImage, MatCardContent, MatCardActions, RouterLink]
})
export class HomeComponent {

constructor(private router: Router){

}

  navigateToProjects () {
    this.router.navigateByUrl('/project');
};

navigateToContact(){
  this.router.navigateByUrl('/contact');
}

}
