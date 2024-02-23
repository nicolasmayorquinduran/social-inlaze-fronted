import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import {
  StorageService,
  storageKeysEnum,
} from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      const { jwt, id, FullName } = await this.authService.login(
        this.form.value
      );
      this.storageService.setItem(storageKeysEnum.jwt, jwt);
      this.storageService.setItem(storageKeysEnum.userId, id);
      this.storageService.setItem(storageKeysEnum.userName, FullName);

      this.router.navigate(['/muro']);
    }
  }
}
