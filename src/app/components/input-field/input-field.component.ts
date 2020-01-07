import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {

  @Input() value;

  @Output() inputValue = new EventEmitter();

  currency = '';

  passValue = (passValue) => {
    this.inputValue.emit(passValue);
  }

}

