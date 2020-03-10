import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({

  templateUrl: './signin.component.html'

})
export class SignInComponent implements OnInit {


  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { } //o constructor injeta um artefato em uma classe
  ngOnInit(): void   // Cria o Form
  {

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

}
