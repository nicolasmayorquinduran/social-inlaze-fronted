import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { postEntityInterface } from '../interfaces/entities';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private apiService: ApiService) {}

  async getPostsByUserId(userId: number) {
    return this.apiService.getList('users', { id: userId });
  }

  async getAllPosts() {
    return this.apiService.getList('users');
  }

  async createPost(body: postEntityInterface) {
    return this.apiService.postData('user', body);
  }

  async updatePost(postId: number, body: Partial<postEntityInterface>) {
    return this.apiService.putData('user', postId, body);
  }

  async deletePost(postId: number) {
    return this.apiService.deleteData('post', postId);
  }
}
