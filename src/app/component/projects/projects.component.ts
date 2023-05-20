import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private router: Router){}

  goToHome(){
    this.router.navigateByUrl('/');
  }


  cardDetails=[
   {name: "Counter"},
   {name: "CSS shapes"}, 
   {name: "Telephone Formatter"},
   {name: "Guess the Number"}, 
   {name: "Show/Hide Password"},
   {name: "To Do List"},
   {name: "Star Rating"},
   {name: "Color Spotter"},
   {name: "Chess Board"},
   {name: "Light and Dark Mode"},
   {name: "Basic Calculator"},
   {name: "Countdown Timer"},
   {name: "Progress Bar"},
   {name: "Digital Clock"},
   {name: "OTP Input"}
   ]
}
