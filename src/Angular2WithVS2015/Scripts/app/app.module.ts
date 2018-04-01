import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee';
import { CommonModule } from '@angular/common';
import { CustomPipe } from './CustomPipe';
import { EmpFilterComponent } from './EmpFilter';
//import { EmployeeService } from './EmployeeService';
//import { EmployeeFilterComponent } from './EmployeeFilter';






@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, CommonModule],
    declarations: [AppComponent, EmployeeComponent, CustomPipe, EmpFilterComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }