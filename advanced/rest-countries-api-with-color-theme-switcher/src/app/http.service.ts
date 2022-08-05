import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllCountries() {
    return this._http.get(`${environment.urlBase}/all`);
  }

  getCountryByName(name: string) {
    return this._http.get(`${environment.urlBase}/name/${name}`);
  }

  getCountryByRegion(region: string) {
    return this._http.get(`${environment.urlBase}/region/${region}`);
  }

}
