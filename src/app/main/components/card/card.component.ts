import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  StorageService,
  storageKeysEnum,
} from 'src/app/core/services/storage.service';
import { postEntityInterface } from 'src/app/shared/interfaces/entities';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() post!: postEntityInterface;
  @Output() updatePostEmit = new EventEmitter();
  userId?: number;
  canEditPost: boolean = false;
  isEditingPost: boolean = false;
  constructor(
    private postsService: PostService,
    private storageService: StorageService
  ) {
    this.userId = Number(storageService.getItem(storageKeysEnum.userId));
    this.canEditPost = Boolean(
      this.userId && this.userId.toString() === this.post?.user?.id
    );
    this.canEditPost;
  }

  ngOnInit(): void {
    this.canEditPost = Boolean(this.userId === this.post.user?.id);
  }

  getUserInitial(username?: string): string {
    return username ? username[0] : '';
  }

  async addLike(): Promise<void> {
    await this.postsService.updatePost(Number(this.post.id), {
      likes: this.post.likes + 1,
    });
    this.updatePostEmit.emit();
  }

  async editPost(): Promise<void> {
    this.isEditingPost = true;
  }

  async deletePost(): Promise<void> {
    await this.postsService.deletePost(Number(this.post.id));
    this.updatePostEmit.emit();
  }

  editPostField($event: Event, fieldName: 'title' | 'content') {
    const inputValue = ($event.target as HTMLInputElement).value;
    if (!inputValue) return;
    this.post[fieldName] = inputValue;
  }

  async updatePost(): Promise<void> {
    if (this.post) {
      const { title, content, id } = this.post;
      await this.postsService.updatePost(Number(id), { title, content });
    }
    this.updatePostEmit.emit();
    this.isEditingPost = false;
  }
}
