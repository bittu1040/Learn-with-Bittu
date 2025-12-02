import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsImageComponent } from './snippets-image.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DataSharingService } from '@app/shared/data-sharing.service';
import { of } from 'rxjs';

fdescribe('SnippetsImageComponent', () => {
  let component: SnippetsImageComponent;
  let fixture: ComponentFixture<SnippetsImageComponent>;
  let service: DataSharingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule, MatToolbarModule, MatIconModule, MatSlideToggleModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatExpansionModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTreeModule,
        MatTableModule,
        MatAutocompleteModule,
        MatSelectModule, MatSidenavModule, BrowserAnimationsModule, SnippetsImageComponent],
    providers: [DataSharingService, provideHttpClient(withInterceptorsFromDi())]
});
    fixture = TestBed.createComponent(SnippetsImageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataSharingService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display posts when button is clicked', () => {
    const mockPost= {title: "test title", body: "test body"};
    const spy= spyOn(service, 'getPost').and.returnValue(of(mockPost));
    component.fetchPost();
    fixture.detectChanges();
    expect(component.post).toEqual(mockPost);
  });

  it('should call getProducts and get the prodoucts', () => {
    const mockProduct= {title: "test title", body: "test body"};
    const spy= spyOn(service, 'getProductList').and.returnValue(of(mockProduct));
    component.getProducts();
    fixture.detectChanges();  
    expect(component.products).toEqual(mockProduct);
  });

  it('should call onInputChange method', () => {
    const event= {target: {value: 'bittu'}};
    component.onInputChange(event);
    fixture.detectChanges();
    component.searchSubject.subscribe((searchQuery: string) => {
      expect(searchQuery).toBe('bittu');
    })
  });

  it('should call getFilteredProducts method', () => {

    const mockProduct= [
      {
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "rating": {
              "rate": 3.9,
              "count": 120
          }
      },
      {
          "id": 2,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 22.3,
          "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "rating": {
              "rate": 4.1,
              "count": 259
          }
      }]

    const searchQuery= 'mens'.toLowerCase();
    const filteredProducts: any = [      {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
          "rate": 4.1,
          "count": 259
      }
  }]

    const spy= spyOn(service, 'getProductList').and.returnValue(of(mockProduct));
    component.getFilteredProducts(searchQuery);
    fixture.detectChanges();
    expect(component.products).toEqual(filteredProducts);
  });

  it('should call _filter method', () => {
    component.cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']; // Mocking cities array
    const searchQuery= 'new'.toLowerCase();
    const expectedFilteredCities: string[] = ['New York'];
    const filteredCities= component._filter(searchQuery);
    fixture.detectChanges();
    expect(filteredCities).toEqual(expectedFilteredCities);
  });


});
