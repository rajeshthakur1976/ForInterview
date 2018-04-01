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
var EmployeeEntity_1 = require("./EmployeeEntity");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    //getEmployee(): Observable<EmployeeEntity[]> {
    //    return this._http.get("http://localhost:51124/api/employee")
    //        .map((response: Response) => <EmployeeEntity[]>response.json());
    //}
    EmployeeService.prototype.getEmployee = function () {
        var objreturn = [];
        var firstObject = new EmployeeEntity_1.EmployeeEntity();
        firstObject.AnualSalary = 2000;
        firstObject.Code = "EMP02";
        firstObject.DOB = "10/10/2017";
        firstObject.Gender = "Male";
        firstObject.Name = "Mack";
        var objtwo = new EmployeeEntity_1.EmployeeEntity();
        objtwo.AnualSalary = 2000;
        objtwo.Code = "EMP02";
        objtwo.DOB = "10/10/2017";
        objtwo.Gender = "Male";
        objtwo.Name = "Mack";
        for (var x = 0; x <= 10; x++) {
            objreturn.push(objtwo);
            objreturn.push(firstObject);
        }
        return objreturn;
        //return  [{ Name: "Marek", Code: "EA001", Gender: "Male", DOB: "10/10/2017", AnualSalary: 23000000 }, { Name: "Clark", Code: "EA002", Gender: "Female", DOB: "11/10/2017", AnualSalary: 23000000 }, { Name: "Jim", Code: "EA003", Gender: "Male", DOB: "11/10/2015", AnualSalary: 23000 }];
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map