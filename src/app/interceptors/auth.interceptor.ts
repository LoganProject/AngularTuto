import {inject} from '@angular/core';
import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {AuthService} from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService)
  const headers = new HttpHeaders()
    .append('Authorization', `Bearer ${auth.getToken()}`);

  const modifiedReq = req.clone({ headers });
  return next(modifiedReq);
}
