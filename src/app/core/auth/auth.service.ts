import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string)
  {
    return this.http.post(API_URL + '/user/login', { userName, password })// poderia também enviar os paramentros sem precisar atribui-los,
                                                                                         //pois o nome da propriedade é o mesmo da variavel se tratando de javaScript,
                                                                                         //caso contrario teria que fazer atribuição se os nomes fosse diferentes.Ficaria{userName, password}
  }
}
