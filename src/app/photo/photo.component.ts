import { Component } from '@angular/core';

@Component({
  selector: 'a-photo', //letra a é de Alura, nome do curso
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {

  title = 'Alura';
  description = "Leão"
  url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg"
}
