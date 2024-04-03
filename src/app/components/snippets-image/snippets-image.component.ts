import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataSharingService } from 'app/shared/data-sharing.service';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-snippets-image',
  templateUrl: './snippets-image.component.html',
  styleUrls: ['./snippets-image.component.css']
})
export class SnippetsImageComponent implements OnInit {

  cities: string[] = [];
  filteredCities!: Observable<string[]>;
  cityFormGroup!: FormGroup;

  products: any;
  searchQuery: string = '';


  constructor(private formBuilder: FormBuilder, private data: DataSharingService) { }

  ngOnInit() {
    this.cityFormGroup = this.formBuilder.group({
      city: ['']
    });

    this.getCountryList();
    this.getProducts();
  }

  getCountryList() {
    this.data.getCountriesList().subscribe((data: any) => {
      data.forEach((country: any) => {
        this.cities.push(country.name.common);
      });
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


  getProducts() {
    this.data.getProductList().subscribe((data: any) => {
      this.products = data;
    });
  }


  onInputChange(event: any) {
    this.searchQuery = event.target.value;
    this.data.getProductList().subscribe((data: any) => {
      this.products = data.filter((product: any) => {
        return product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      }
      );
    });
  }

}
