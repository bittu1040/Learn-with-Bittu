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
   {name: "counter"},
   {name: "css shapes"}, 
   {name: "telephone formatter"},
   {name: "counter"}, 
   {name: "css shapes"}, 
   {name: "telephone formatter"},
   {name: "counter"},
   {name: "css shapes"}, 
   {name: "telephone formatter"},
   {name: "counter"}, 
   {name: "css shapes"}, 
   {name: "telephone formatter"}
   ]
}
