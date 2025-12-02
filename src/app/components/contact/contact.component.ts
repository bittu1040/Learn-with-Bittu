import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, FormsModule, MatFormField, MatLabel, MatInput, MatButton]
})
export class ContactComponent {

  constructor(private router: Router) {

  }

  goToHome() {
    this.router.navigateByUrl('/');
  }
}
