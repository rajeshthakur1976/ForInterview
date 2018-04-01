import { Component,OnInit } from '@angular/core';

import { EmployeeService } from './EmployeeService';


@Component({
    selector: 'course',
     templateUrl: 'app/CourseDetails.html',
   // template: 'Test data',
    providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
    
    title: string = "Course title";
    employees: any[];
    constructor(private _employeeService: EmployeeService) {
        //this.employees=_employeeService.getEmployee();

        //this.employees = [{ Name: "Marek", Code: "EA001", Gender: "Male", DOB: "10/10/2017", AnualSalary: 23000000 }, { Name: "Clark", Code: "EA002", Gender: "Female", DOB: "11/10/2017", AnualSalary: 23000000 }, { Name: "Jim", Code: "EA003", Gender: "Male", DOB: "11/10/2015", AnualSalary: 23000 }];
    }

    // This is the Best Place to Call Service it is fired after the constructor
    ngOnInit() {
        // this._employeeService.getEmployee().subscribe((employeedata) => { this.employees = employeedata });
        this.employees = this._employeeService.getEmployee();

    }
    CourseID: string = "1";
    CourseName: string = "ANgularJS";

    FirstName: string = "Rajesh";
    LastName: string = "Thakur";
    showdetails: boolean = false;
    toggledetails(): void {
        this.showdetails = !this.showdetails;
    }
    clickEvent(): void {
        console.log("Even Click Fired");
    }
    getAllEmployee(): number {

        return this.employees.length;
    }
    getMaleEmployee = () => { return this.employees.filter(p => p.Gender == "Male").length };

    getFemaleEmployee = () => { return this.employees.filter(p => p.Gender == "Female").length };

    onEmployeeCountRadioButtonChanged(selectedemployeebutton: string): void {
        console.log(selectedemployeebutton);

    }
    AddEmployee(): void {
        this.employees.push({ Name: "Added From UI", Code: "EA00199", Gender: "Male", DOB: "10/10/2017", AnualSalary: 23000000 });
    }
    RemoveEmployee(): void {
        this.employees.pop();
    
    }
}

