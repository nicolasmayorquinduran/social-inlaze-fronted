import { Component, OnInit } from '@angular/core';
import { postEntityInterface } from 'src/app/shared/interfaces/entities';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/shared/services/post.service';
import {
  StorageService,
  storageKeysEnum,
} from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
})
export class FeedComponent implements OnInit {
  posts: postEntityInterface[] = [];
  filteredPosts: postEntityInterface[] = [];
  postsSearchValue: string = '';
  isCreatingPost: boolean = false;
  userId?: string;
  form: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    content: [''],
    user: [''],
    likes: [0],
  });
  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  async getAllPosts() {
    this.posts = await this.postsService.getAllPosts();
    this.filteredPosts = this.posts;
  }

  filterPosts() {
    this.filteredPosts = this.posts.filter(
      (post) =>
        post.content.includes(this.postsSearchValue) ||
        post.title.includes(this.postsSearchValue)
    );
  }

  openPostForm() {
    this.isCreatingPost = true;
  }

  createPost(): void {
    if (this.form.valid) {
      this.form.reset();
    }
    this.isCreatingPost = false;
  }
  onInput($event: Event) {
    const inputValue = ($event.target as HTMLInputElement).value;
    inputValue.length === 0;
    this.filteredPosts = this.posts;
  }
}
