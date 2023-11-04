import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Coffee } from './coffee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl);
  }
}
