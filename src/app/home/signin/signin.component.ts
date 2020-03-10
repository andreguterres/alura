import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({

  templateUrl: './signin.component.html'

})
export class SignInComponent implements OnInit {


  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { } //o constructor, (de formulário nesse caso, o ReactiveFormsModule disponibiliza o FormBuilder) injeta um artefato em uma classe. Ex: Validators
  ngOnInit(): void   // Cria o Form
  {

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]

    })

  }

}
