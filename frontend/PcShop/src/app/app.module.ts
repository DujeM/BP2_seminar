import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ComponentComponent } from './pages/component/component.component';
import { ComponentService } from './services/component.service';
import { CompanyService } from './services/company.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CompanyComponent } from './pages/company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [ComponentService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
