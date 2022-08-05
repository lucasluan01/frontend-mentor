import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
  
})
export class CountryDetailsComponent implements OnInit {

  country: any;
  name: string = '';
  borderCountries: any;
  Object = Object;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.name = params['name'];
      this.getCountryByName();
    });
  }

  getCountryByName() {
    this._httpService.getCountryByName(this.name).subscribe((data: any) => {
      this.country = data[0];

      this.getBorders();
      
    });
  }

  getNativeName() {
    if (this.country?.name?.nativeName)
      return Object.keys(this.country.name.nativeName).map((currency: any) => this.country.name.nativeName[currency].common);
    else
      return 'Not available';
  }

  getCurrencies() {
    if (this.country?.currencies)
      return Object.keys(this.country.currencies).map((currency: any) => this.country.currencies[currency].name);
    else
      return 'Not available';
  }

  getLanguages() {
    if (this.country?.languages)
      return Object.keys(this.country.languages).map((language: any) => this.country.languages[language]);
    else
      return 'Not available';
  }

  getBorders() {
    if (this.country?.borders) {
      let countryCodes = Object.keys(this.country.borders).map((border: any) => this.country.borders[border]);

      this._httpService.getCountryByCodes(countryCodes.join(',')).subscribe(
        (data: any) => {
          this.borderCountries = data.map((country: any) => country.name.common);
        }
      );
    }
    else
      this.borderCountries = [];
  }

}
