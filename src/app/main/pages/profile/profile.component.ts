import { Component, OnInit } from '@angular/core';
import {
  StorageService,
  storageKeysEnum,
} from 'src/app/core/services/storage.service';
import { userEntityInterface } from 'src/app/shared/interfaces/entities';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  user?: userEntityInterface;
  private userId?: string;
  constructor(
    private storageService: StorageService,
    private usersService: UserService
  ) {
    this.userId = storageService.getItem(storageKeysEnum.userId);
  }

  ngOnInit(): void {
    this.getUserById();
  }

  async getUserById(): Promise<void> {
    this.user = await this.usersService.getUserById(Number(this.userId));
  }
}
