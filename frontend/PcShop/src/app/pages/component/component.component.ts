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
  components: any;
  companies: any;
  newComponent = {
    Name: '',
    Price: '',
    ComponentId: 0
  }
  constructor(
    private componentService: ComponentService,
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.getAllComponents();
    this.getAllCompanies();
  }

  getAllComponents() {
    this.componentService.getComponents().subscribe(res => {
      this.components = res;
    });
  }

  getAllCompanies() {
    this.companyService.getCompanies().subscribe((res: any) => {
      this.companies = res;
    });
  }

  postComponent() {
    this.componentService.createComponent(this.newComponent).subscribe((res: any) => {
      this.newComponent = res;
      console.log(res);
    });
    this.newComponent.ComponentId++;
  }
}
