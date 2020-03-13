import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() && this.decodeAndNotify(); // se tiver token ele faz de decodificação dele, senão, não fa a decodificção do token

  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User; //(aqui a chamada jwt_decode)
    this.userName = user.name;
    this.userSubject.next(user);
  }

  getLogout() {
    this.tokenService.removeToken();// remove o token
    this.userSubject.next(null); // ele emite uma valor null para sumir o nome do usuário que esta no header
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
