import { Injectable } from '@angular/core';

export enum storageKeysEnum {
  jwt = 'jwt',
  userId = 'userId',
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getItem(key: storageKeysEnum): any {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }

  setItem(key: storageKeysEnum, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: storageKeysEnum): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
