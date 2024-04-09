import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataSharingService } from 'app/shared/data-sharing.service';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, take } from 'rxjs/operators';

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
  private searchSubject = new Subject<string>();



  constructor(private formBuilder: FormBuilder, private data: DataSharingService) { }

  ngOnInit() {
    this.cityFormGroup = this.formBuilder.group({
      city: ['']
    });

    this.getCountryList();
    this.getProducts();

    this.searchSubject.pipe(
      debounceTime(600)
    ).subscribe(searchQuery => {
      this.getFilteredProducts(searchQuery);
    });

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
    const searchQuery = event.target.value.toLowerCase();
    this.searchSubject.next(searchQuery);
  }

  getFilteredProducts(searchQuery: string) {
    this.data.getProductList().subscribe((data: any) => {
      this.products = data.filter((product: any) =>
        product.title.toLowerCase().includes(searchQuery)
      );
    });
  }



}
