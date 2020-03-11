import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({

  templateUrl: './signin.component.html'

})
export class SignInComponent implements OnInit {


  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;


  constructor //o constructor, (de formulário nesse caso, o ReactiveFormsModule disponibiliza o FormBuilder) injeta um artefato em uma classe. Ex: Validators
    (
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }


  ngOnInit(): void   // Cria o Form
  {

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  login() {
    
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
      () => this.router.navigate(['user',userName]),
        err => {
          this.loginForm.reset();
          this.userNameInput.nativeElement.focus();
          alert('Usuário Invalido !');
        }
      );

  }
}
