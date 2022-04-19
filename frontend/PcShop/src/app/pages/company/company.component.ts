import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  displayedColumns: string[] = ['CompanyId', 'Name', 'Email', 'Location', 'CompanyOib'];
  dataSource: any;
  companies: any;
  newComponent = {
    name: '',
    price: '',
    companyId: 0
  }
  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companyService.getCompanies().subscribe((res: any) => {
      this.dataSource = res;
    });
  }
}
