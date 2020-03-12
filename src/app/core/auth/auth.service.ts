import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string) {
    return this.http.post(API_URL + '/user/login', { userName, password }, { observe: 'response' })// poderia também enviar os paramentros sem precisar atribui-los,
      .pipe(tap(res => {                                                                           //pois o nome da propriedade é o mesmo da variavel se tratando de javaScript,
       const authToken = res.headers.get('x-access-token');                                       //caso contrario teria que fazer atribuição se os nomes fosse diferentes.Ficaria{userName, password}
       console.log(`User ${userName} authenticated with token ${authToken}`)                                                                                          
                                                                                                 
    

      }));
  }
}
