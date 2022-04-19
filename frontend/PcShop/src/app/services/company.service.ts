import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getCompanies() {
    return this.httpClient.get('http://localhost:3000/api/company/');
  }
}
