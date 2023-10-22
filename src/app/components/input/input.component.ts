import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() label: string = '';
  @Input() placeHolder: string = '';
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() isSuffix: boolean = false;

  @Output() change = new EventEmitter<string>();

  onChange(){
    this.change.emit(this.value)
  }
}
