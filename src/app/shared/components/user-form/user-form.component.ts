import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userEntityInterface } from '../../interfaces/entities';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {
  StorageService,
  storageKeysEnum,
} from 'src/app/core/services/storage.service';

@Component({
  selector: 'shared-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
})
export class UserFormComponent implements OnChanges {
  @Input() user?: userEntityInterface;
  private userId?: string;
  form: FormGroup = this.formBuilder.group({
    FullName: ['', [Validators.required]],
    age: '',
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private storageService: StorageService
  ) {
    this.userId = storageService.getItem(storageKeysEnum.userId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.user) {
      const { FullName, age, email } = this.user;
      this.form.patchValue({ FullName, age, email });
    }
  }

  async onSubmit() {
    if (this.user) {
      const { FullName, age, email } = this.form.value;
      return await this.userService.updateUser(Number(this.userId), {
        FullName,
        age,
        email,
      });
    }
    const { FullName, age, email, password } = this.form.value;
    await this.authService.register({ FullName, age, email, password });
    this.router.navigate(['']);
  }
}
