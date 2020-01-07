import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { InputFieldComponent } from '../input-field/input-field.component';
import { CurrencyService } from '../../services/currency-service.service';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnDestroy {
  currencyReducers
  constructor(private cService: CurrencyService, private store: Store<any>) { }

  @ViewChild(InputFieldComponent, null) inputCurrency

  amtToBeConvert: String = 'Type in amount and select currency';
  convertedAmt: String = 'Converted amount';
  disclaimerLinkText: String = 'Disclaimer';
  headerText: String = 'Currency Converter';
  inputDDText: String = 'INPUT';
  convertedInputText: String = 'CONVERTED';
  subscribedValue;
  convertedValue;
  inputValue;
  inputCountryCode = 'USD'
  convertedCountryCode = 'CAD'

  convertCurrency = () => {
    const date = new Date();
    if (this.inputCurrency.currency) {
      this.subscribedValue = this.cService.getConvertedValue(this.inputCountryCode).subscribe(data => {
        this.convertedValue = data['rates'][this.convertedCountryCode] * this.inputCurrency.currency;
        this.convertedValue = this.convertedValue ? this.convertedValue : '';
        if (data) {
          let obj = {
            from: data['base'],
            to: this.convertedCountryCode,
            date: data['date'],
            time: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
          }
          this.store.dispatch({ type: 'SAVE', payload: obj });
        }
      });
    }
  }

  getCountryCode = (obj) => {
    if (obj.inputDD === 'INPUT') {
      this.inputCountryCode = obj.value;
    } else if (obj.inputDD === 'CONVERTED') {
      this.convertedCountryCode = obj.value;
    }
    this.convertCurrency();
  }

  ngOnDestroy() {
    if (this.subscribedValue) this.subscribedValue.unsubscribe();
  }

}

