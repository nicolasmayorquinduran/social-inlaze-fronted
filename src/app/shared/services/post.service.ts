import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { postEntityInterface } from '../interfaces/entities';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private apiService: ApiService) {}

  async getPostsByUserId(userId: number) {
    return this.apiService.getList('posts', { id: userId });
  }

  async getAllPosts() {
    return this.apiService.getList('posts');
  }

  async createPost(body: postEntityInterface) {
    return this.apiService.postData('post', body);
  }

  async updatePost(postId: number, body: Partial<postEntityInterface>) {
    return this.apiService.putData('post', postId, body);
  }

  async deletePost(postId: number) {
    return this.apiService.deleteData('post', postId);
  }
}
