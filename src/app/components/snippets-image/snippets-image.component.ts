import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DataSharingService } from '@shared/data-sharing.service';
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
  simpleForm1!: FormGroup;

  post:any;

  dateAndTimeInputForm!: FormGroup;

  products: any;
  searchQuery: string = '';
  private searchSubject = new Subject<string>();



  constructor(private formBuilder: FormBuilder, private data: DataSharingService) { }

  ngOnInit() {
    this.cityFormGroup = this.formBuilder.group({
      city: ['']
    });

    this.dateAndTimeInputForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      time: ['', Validators.required]
    }, { validators: this.compareDates });

    this.simpleForm1 = this.formBuilder.group({
      fullName: ['ab', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      city: ['ab', Validators.required],
      DOB: ['', Validators.required],
      Age: ['23'],
      uniqueId: ['ab', Validators.required],
      confirmUniqueId: ['abnj', [Validators.required]], 
    }, {validators: this.compareUniqueID} );

    this.getCountryList();
    this.getProducts();

    this.searchSubject.pipe(
      debounceTime(600)
    ).subscribe(searchQuery => {
      this.getFilteredProducts(searchQuery);
    });

  }

  compareUniqueID(group: FormGroup): { [key: string]: any } | null {
    const uniqueId = group.controls['uniqueId'].value;
    const confirmUniqueId = group.controls['confirmUniqueId'].value;
    console.log({uniqueId: uniqueId, confirmUniqueId: confirmUniqueId});
    if(uniqueId !== confirmUniqueId) {
      group.controls['confirmUniqueId'].setErrors({ uniqueIdMatch: true });
      return {uniqueIdMatch: true};
    }
    return null;
  }

  compareDates(group: FormGroup): { [key: string]: any } | null {
    const startDate = group.controls['startDate'].value;
    const endDate = group.controls['endDate'].value;
    console.log({startDate: startDate, endDate: endDate})

    if (startDate && endDate && startDate >= endDate) {
      group.controls['endDate'].setErrors({ datesComparision: true });
      return {datesComparision: true};
    }
    return null;
  }

  dateFormatValidator(control: AbstractControl): ValidationErrors | null {
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (control.value && !datePattern.test(control.value)) {
      return { invalidDateFormat: 'Date format should be MM/DD/YYYY' };
    }
    return null;
  }

  dateFormSubmit(){
    if (this.dateAndTimeInputForm.valid) {
      console.log(this.dateAndTimeInputForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  simpleForm1Submit(){
    if (this.simpleForm1.valid) {
      this.simpleForm1.value.DOB = `${this.simpleForm1.value.DOB.getDate()}/${this.simpleForm1.value.DOB.getMonth() + 1}/${this.simpleForm1.value.DOB.getFullYear()}`;
      console.log(this.simpleForm1.value);
    } else {
      console.log('Form is invalid');
    }
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


  fetchPost(): void {
    this.data.getPost().subscribe((data) => {
      this.post = data;
    });
  }




}
