import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-photo', //letra a é de Alura, nome do curso
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {

  title = 'Alura';

  @Input() description = ""
  @Input() url = ""
}
