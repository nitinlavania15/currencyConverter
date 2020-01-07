import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  constructor(private store: Store<any>) { }

  tableHeader: String = 'History Data';
  tableHeaderCells = ['No', 'From', 'To', 'Date', 'Time', ''];
  tableDataArr = [];
  storeSubscription;

  ngOnInit() {
    this.storeSubscription = this.store.select('currencyReducers').subscribe(state => {
      this.tableDataArr = state || [];
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}

