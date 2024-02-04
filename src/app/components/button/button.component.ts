import { Component, Input, Output, input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input("btn-text") btnText: string = ""
  @Output("submit") onSubmit = new EventEmitter()
  @Input() disabled: boolean = false
  @Input() loading: boolean = false

  submit() {
    this.onSubmit.emit()
  }
}
