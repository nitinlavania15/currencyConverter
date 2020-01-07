import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getConvertedValue = (countryCode) => {
    return this.http.get('https://api.exchangeratesapi.io/latest?base=' + countryCode);
  }

}
