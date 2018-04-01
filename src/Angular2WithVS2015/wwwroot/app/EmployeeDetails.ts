import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
         <div><h1>{{pageTitle}}</h1>
<course></course>
    </div>
    `
})
export class EmployeeDetailsComponent {
    employees: any[];
    constructor() {
        this.employees = [
            { ID: 1, Name: "Mack", Age: 20, Gender: 1 },
            { ID: 2, Name: "Jack", Age: 20, Gender: 1 },
            { ID: 3, Name: "Tack", Age: 20, Gender: 1 },
            { ID: 4, Name: "Rack", Age: 20, Gender: 2 },
            { ID: 5, Name: "Hack", Age: 20, Gender: 2 },
            { ID: 6, Name: "Fan", Age: 20, Gender: 2 },
            { ID: 7, Name: "San", Age: 20, Gender: 2 },
            { ID: 8, Name: "CAN", Age: 20, Gender: 2},
            { ID: 9, Name: "DAN", Age: 20, Gender: 2 },
            { ID: 10, Name: "RAN", Age: 20, Gender: 1 },
            { ID: 11, Name: "RAHUL", Age: 20, Gender: 1 },
            { ID: 12, Name: "CARET", Age: 20, Gender: 1 },
            { ID: 13, Name: "CAMELIN", Age: 20, Gender: 1 },
            { ID: 14, Name: "Komal", Age: 20, Gender: 1 },
            { ID: 15, Name: "Kanak", Age: 20, Gender: 1 },
            { ID: 116, Name: "Jana", Age: 20, Gender: 1 },
            { ID: 111, Name: "Ganga", Age: 20, Gender: 1 },
            { ID: 189, Name: "Jamuna", Age: 20, Gender: 1 },
            { ID: 901, Name: "RAMA", Age: 20, Gender: 1 },
            { ID: 89891, Name: "Ockland", Age: 20, Gender: 1 },
            { ID: 2344, Name: "Rockland", Age: 20, Gender: 1 },
        ];
    }
   
}
