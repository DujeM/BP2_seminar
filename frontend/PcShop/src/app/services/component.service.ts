import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getComponents() {
    return this.httpClient.get('http://localhost:3000/api/components/');
  }
}
