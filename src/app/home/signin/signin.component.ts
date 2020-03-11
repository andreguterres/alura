import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatFormDetectorService } from 'src/app/core/platform-detector/platform-service';

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
    private router: Router,
    private platformDectectorService: PlatFormDetectorService
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
          this.platformDectectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();// Sendo um boolean e tendo a condição "&&" se o 1º for verdadeiro ele testa a segunda condição se é true ou falso tbm,
                                                                                                       //se o 1º for falso ele nem excuta a segunda condição
          alert('Usuário Invalido !');
        }
      );

  }
}
