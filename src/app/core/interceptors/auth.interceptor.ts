import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { StorageService, storageKeysEnum } from '../services/storage.service';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private totalRequests = 0;
  constructor(
    private storageService: StorageService,
    private loadingService: LoaderService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    this.loadingService.setLoading(true);
    const jwt = this.storageService.getItem(storageKeysEnum.jwt);
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jwt || ''}`,
      },
    });
    return next.handle(authReq).pipe(
      finalize(async () => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}
