import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private store: Store<any>) { 
    
  }

  tableDataArr = [];

  ngOnInit() {
    this.store.subscribe(state => {
      this.tableDataArr = state.currencyReducers || [];
    });
  }

}

