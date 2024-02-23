import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import {
  postEntityInterface,
  userEntityInterface,
} from '../interfaces/entities';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  async login(body: { FullName: string; password: string }) {
    return this.apiService.postData('login', body);
  }

  async register(body: userEntityInterface) {
    return this.apiService.postData('register', body);
  }
}
