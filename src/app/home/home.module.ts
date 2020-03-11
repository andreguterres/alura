import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/componets/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({

  declarations: [SignInComponent],
  imports:
    [
      CommonModule,
      ReactiveFormsModule,//ReactiveFormsModule disponibilza diretivas e ferramentas para fazer validações.
      VMessageModule,
      RouterModule
    ]

})
export class HomeModule {}
