import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { userEntityInterface } from '../interfaces/entities';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  async getUserById(id: number) {
    return this.apiService.getOne('user', id);
  }

  async updateUser(userId: number, body: Partial<userEntityInterface>) {
    return this.apiService.putData('user', userId, body);
  }
}
