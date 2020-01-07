import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { DdComponent } from './components/dd/dd.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { TableComponent } from './components/table/table.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { InputLabelComponent } from './components/input-label/input-label.component';
import { StoreModule } from '@ngrx/store';
import { currencyReducer } from './reducers/currency.reducer';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    DdComponent,
    TableComponent,
    MainContainerComponent,
    DisclaimerComponent,
    InputLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ 'currencyReducers': currencyReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
