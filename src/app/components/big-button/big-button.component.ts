import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.css']
})
export class BigButtonComponent {
  @Input() label: string = '';

  @Output() clickEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  emit() {
    this.clickEvent.emit(true)
  }
}
