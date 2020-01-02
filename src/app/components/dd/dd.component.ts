import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drop-down',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.scss']
})
export class DdComponent implements OnInit {

  constructor() { }

  @Input() inputDD;

  @Input() ddValue;

  @Output() countryCode = new EventEmitter();

  items = ['CAD', 'USD', 'EUR'];

  fetchValue = (value) => {
    this.countryCode.emit({value, inputDD: this.inputDD});
  }

  ngOnInit() {
  }

}

