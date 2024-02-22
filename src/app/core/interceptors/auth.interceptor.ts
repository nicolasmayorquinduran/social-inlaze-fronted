import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService, storageKeysEnum } from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }

  async handle(req: any, next: any) {
    const jwt = this.storageService.getItem(storageKeysEnum.jwt);
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwt || ''}`,
      },
    });
    return next.handle(authReq).toPromise();
  }
}
