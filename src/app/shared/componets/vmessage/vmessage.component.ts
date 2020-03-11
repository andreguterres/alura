import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-vmessage',
  templateUrl: './vmessage.component.html'
})
export class VMessageComponent
{
  @Input() text = '';
}
