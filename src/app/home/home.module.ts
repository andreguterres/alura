import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/componets/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sigup/signup.component';

@NgModule({

  declarations: [SignInComponent, SignUpComponent],
  imports:
    [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,//ReactiveFormsModule disponibilza diretivas e ferramentas para fazer validações.
      VMessageModule,
      RouterModule
    ]

})
export class HomeModule {}
