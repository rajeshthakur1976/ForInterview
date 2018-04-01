"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService_1 = require("./EmployeeService");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_employeeService) {
        //this.employees=_employeeService.getEmployee();
        var _this = this;
        this._employeeService = _employeeService;
        this.title = "Course title";
        this.CourseID = "1";
        this.CourseName = "ANgularJS";
        this.FirstName = "Rajesh";
        this.LastName = "Thakur";
        this.showdetails = false;
        this.getMaleEmployee = function () { return _this.employees.filter(function (p) { return p.Gender == "Male"; }).length; };
        this.getFemaleEmployee = function () { return _this.employees.filter(function (p) { return p.Gender == "Female"; }).length; };
        //this.employees = [{ Name: "Marek", Code: "EA001", Gender: "Male", DOB: "10/10/2017", AnualSalary: 23000000 }, { Name: "Clark", Code: "EA002", Gender: "Female", DOB: "11/10/2017", AnualSalary: 23000000 }, { Name: "Jim", Code: "EA003", Gender: "Male", DOB: "11/10/2015", AnualSalary: 23000 }];
    }
    // This is the Best Place to Call Service it is fired after the constructor
    EmployeeComponent.prototype.ngOnInit = function () {
        // this._employeeService.getEmployee().subscribe((employeedata) => { this.employees = employeedata });
        this.employees = this._employeeService.getEmployee();
    };
    EmployeeComponent.prototype.toggledetails = function () {
        this.showdetails = !this.showdetails;
    };
    EmployeeComponent.prototype.clickEvent = function () {
        console.log("Even Click Fired");
    };
    EmployeeComponent.prototype.getAllEmployee = function () {
        return this.employees.length;
    };
    EmployeeComponent.prototype.onEmployeeCountRadioButtonChanged = function (selectedemployeebutton) {
        console.log(selectedemployeebutton);
    };
    EmployeeComponent.prototype.AddEmployee = function () {
        this.employees.push({ Name: "Added From UI", Code: "EA00199", Gender: "Male", DOB: "10/10/2017", AnualSalary: 23000000 });
    };
    EmployeeComponent.prototype.RemoveEmployee = function () {
        this.employees.pop();
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'course',
            templateUrl: 'app/CourseDetails.html',
            // template: 'Test data',
            providers: [EmployeeService_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=Employee.js.map