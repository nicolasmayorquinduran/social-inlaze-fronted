import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private front: string = 'http://localhost:4200/';
  private server: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  getList(direction: string, entries?: Record<string, any>): Promise<any> {
    const url = `${this.server}/${direction}`;
    return lastValueFrom(
      this.httpClient
        .get<any>(url, { params: entries })
        .pipe(map((response) => response))
    );
  }
  getOne(direction: string, id: number): Promise<any> {
    const url = `${this.server}/${direction}/${id}`;
    return lastValueFrom(
      this.httpClient.get<any>(url).pipe(map((response) => response))
    );
  }

  postData(direction: string, item: Record<string, any>): Promise<any> {
    const url = `${this.server}/${direction}`;
    return lastValueFrom(
      this.httpClient.post<any>(url, item).pipe(map((response) => response))
    );
  }

  putData(direction: string, id: number, item: any): Promise<any> {
    const url = `${this.server}/${direction}/${id}`;
    return lastValueFrom(
      this.httpClient.put<any>(url, item).pipe(map((response) => response))
    );
  }

  deleteData(direction: string, id: number): Promise<any> {
    const url = `${this.server}/${direction}/${id}`;
    return lastValueFrom(
      this.httpClient.delete<any>(url).pipe(map((response) => response))
    );
  }
}
