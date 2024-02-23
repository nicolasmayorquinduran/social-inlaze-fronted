import { Component } from '@angular/core';
import {
  StorageService,
  storageKeysEnum,
} from 'src/app/core/services/storage.service';
import { Router } from '@angular/router';

interface sideMenuOption {
  name: string;
  url: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent {
  showFiller: boolean = false;
  userName: string = this.storageService.getItem(storageKeysEnum.userName);
  activeRute: string = '';
  menuOptions: sideMenuOption[] = [
    {
      name: 'Ver Muro',
      url: 'muro',
    },
    {
      name: 'Editar perfil',
      url: 'perfil',
    },
  ];

  constructor(private storageService: StorageService, private router: Router) {}

  onMenuOption(menuOptionName: string) {
    this.activeRute = menuOptionName;
  }

  signOut() {
    this.storageService.clear();
    this.router.navigate(['']);
  }

  get userInitial(): string {
    return this.userName ? this.userName[0] : '';
  }
}
