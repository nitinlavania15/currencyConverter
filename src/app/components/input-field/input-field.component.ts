import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  constructor() { }

  @Input() inputName;
  @Input() value;

  @Output() inputValue = new EventEmitter();

  currency = '';

  passValue = (passValue) => {
    this.inputValue.emit(passValue);
  }

  ngOnInit() {
  }

}

