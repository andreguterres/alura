import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({

  selector: 'a-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent
{
  user$: Observable<User>; // o $ é para indicar que esta guardando um valor de um observable
  user: User;

  constructor(private userService: UserService, private router: Router)
  {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user); // se increve no observable e pega o valor para carregar na tela
  }
  logout() {

    this.userService.getLogout();
    this.router.navigate(['']);



  }
}
