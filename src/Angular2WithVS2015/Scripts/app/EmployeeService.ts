import { Injectable } from '@angular/core';
import { EmployeeEntity } from './EmployeeEntity';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {
    constructor(private _http: Http) {
    }

    //getEmployee(): Observable<EmployeeEntity[]> {
    //    return this._http.get("http://localhost:51124/api/employee")
    //        .map((response: Response) => <EmployeeEntity[]>response.json());


    //}
    getEmployee(): any[] {
        var objreturn = [];
        var firstObject = new EmployeeEntity();
        firstObject.AnualSalary = 2000;
        firstObject.Code = "EMP02";
        firstObject.DOB = "10/10/2017";
        firstObject.Gender = "Male";
        firstObject.Name = "Mack";

        var objtwo = new EmployeeEntity();
        objtwo.AnualSalary = 2000;
        objtwo.Code = "EMP02";
        objtwo.DOB = "10/10/2017";
        objtwo.Gender = "Male";
        objtwo.Name = "Mack";
        for (let x = 0; x <= 10; x++)
        {
            objreturn.push(objtwo);
            objreturn.push(firstObject);
        }


        return objreturn;
      //return  [{ Name: "Marek", Code: "EA001", Gender: "Male", DOB: "10/10/2017", AnualSalary: 23000000 }, { Name: "Clark", Code: "EA002", Gender: "Female", DOB: "11/10/2017", AnualSalary: 23000000 }, { Name: "Jim", Code: "EA003", Gender: "Male", DOB: "11/10/2015", AnualSalary: 23000 }];
    }
}