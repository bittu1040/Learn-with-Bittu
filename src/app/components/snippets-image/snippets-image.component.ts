import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataSharingService } from 'app/shared/data-sharing.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-snippets-image',
  templateUrl: './snippets-image.component.html',
  styleUrls: ['./snippets-image.component.css']
})
export class SnippetsImageComponent implements OnInit {

  cities: string[] = [];
  filteredCities!: Observable<string[]>;
  cityFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private data: DataSharingService) { }

  ngOnInit() {
    this.cityFormGroup = this.formBuilder.group({
      city: [''] // Initialize the city form control with an empty string
    });

    this.data.getCountriesList().subscribe((data: any) => {
      data.forEach((country: any) => {
        this.cities.push(country.name.common);
      });
      // Set the filteredCities observable to initially contain all cities
      this.filteredCities = this.cityFormGroup.get('city')!.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    },
    (error) => {
      console.error('Error fetching countries:', error);
    });
  }

  private _filter(value: string): string[] {
    const searchValue = value.toLowerCase();
    return this.cities.filter(city => city.toLowerCase().includes(searchValue));
  }
}
