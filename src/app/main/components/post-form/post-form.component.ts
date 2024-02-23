import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  StorageService,
  storageKeysEnum,
} from 'src/app/core/services/storage.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass'],
})
export class PostFormComponent implements OnInit {
  @Input() isCreatingPost: boolean = false;
  @Output() isCreatingPostEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() createPostEmit = new EventEmitter();
  form: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    content: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  async createPost(): Promise<void> {
    const userId: string = this.storageService.getItem(storageKeysEnum.userId);
    if (this.form.valid && userId) {
      await this.postsService.createPost({
        ...this.form.value,
        user: { id: userId },
        likes: 0,
      });
      this.form.reset();
    }
    this.isCreatingPostEmit.emit(false);
    this.createPostEmit.emit();
  }
}
