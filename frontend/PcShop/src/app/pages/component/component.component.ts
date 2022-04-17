import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  displayedColumns: string[] = ['ComponentId', 'Name', 'Price'];
  dataSource: any;

  constructor(
    private componentService: ComponentService
  ) { }

  ngOnInit(): void {
    this.getAllComponents();
  }

  getAllComponents() {
    this.componentService.getComponents().subscribe(res => {
      this.dataSource = res;
    })
  }

}
