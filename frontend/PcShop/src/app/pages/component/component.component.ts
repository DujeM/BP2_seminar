import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  displayedColumns: string[] = ['ComponentId', 'Manufacturer', 'Name', 'Hardware', 'Price'];
  dataSource: any;
  companies: any;
  newComponent = {
    name: '',
    price: '',
    companyId: 0
  }
  constructor(
    private componentService: ComponentService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.getAllComponents();
    this.getAllCompanies();
  }

  getAllComponents() {
    this.componentService.getComponents().subscribe(res => {
      this.dataSource = res;
    });
  }

  getAllCompanies() {
    this.companyService.getCompanies().subscribe((res: any) => {
      this.companies = res.recordset;
    });
  }

  createComponent() {
    console.log(this.newComponent)
    this.componentService.createComponent(this.newComponent);
  }

}
