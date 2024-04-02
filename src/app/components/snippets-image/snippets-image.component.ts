import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataSharingService } from 'app/shared/data-sharing.service';

@Component({
  selector: 'app-snippets-image',
  templateUrl: './snippets-image.component.html',
  styleUrls: ['./snippets-image.component.css']
})
export class SnippetsImageComponent implements OnInit {


  exampleForm: FormGroup;
  cities: string[] = [];


  constructor(private formBuilder: FormBuilder, private data: DataSharingService) {
    this.exampleForm = this.formBuilder.group({
      city: ['']
    });
  }

  ngOnInit() {

    this.data.getCountriesList().subscribe((data: any) => {
      data.map((data: any) => {
        this.cities.push(data.name.common);
      })
    },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    )

  }


}
