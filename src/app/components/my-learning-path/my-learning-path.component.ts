import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-learning-path',
  templateUrl: './my-learning-path.component.html',
  styleUrls: ['./my-learning-path.component.css']
})
export class MyLearningPathComponent {

  constructor(private router: Router){
    
  }
  goToHome(){
    this.router.navigateByUrl('/');
  }
}
