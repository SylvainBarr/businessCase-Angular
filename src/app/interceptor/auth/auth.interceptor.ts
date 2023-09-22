import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../../service/auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.token
    let toHandle = request
    if(token){ // Si présence d'un token, on clone la requete, on ajoute le token dans 'Authorization' dans le headers
      toHandle = request.clone({
        headers: request.headers.set('Authorization', 'Bearer '+token)
      })
    }
    return next.handle(toHandle);
  }
}
