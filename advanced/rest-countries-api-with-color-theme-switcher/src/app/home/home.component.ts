import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: any = [];

  constructor(
    private _service: HttpService
  ) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this._service.getAllCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }

  onSearch(search: string) {
    if (!search)
      this.getAllCountries();
    else
      this._service.getCountryByName(search).subscribe((data: any) => {
        this.countries = data;
      });
  }

  onRegion(region: any) {
    region = region.target.value;

    if (!region)
      this.getAllCountries();

    else
      this._service.getCountryByRegion(region).subscribe((data: any) => {
        this.countries = data;
      });
  }

}
