import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new this.userSubject<User>();

  constructor(private tokenService: TokenService) { }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.tokenService.hasToken() && this.decodeAndNotify(); // se tiver token ele faz de decodificação dele, senão, não fa a decodificção do token
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User; //(aqui a chamada jwt_decode)
    this.userSubject.next(user);
  }
}
