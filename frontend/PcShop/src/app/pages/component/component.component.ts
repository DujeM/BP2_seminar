import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  constructor(
    private componentService: ComponentService
  ) { }

  ngOnInit(): void {
    this.componentService.getComponents();
  }

}
