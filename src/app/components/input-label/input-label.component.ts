import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss']
})
export class InputLabelComponent implements OnInit {

  constructor() { }

  @Input() label;

  ngOnInit() {
  }

}
