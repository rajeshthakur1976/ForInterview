import {Component,Input,Output,EventEmitter } from '@angular/core'

@Component({

    selector: "EmpFilter",
    templateUrl:'app/EmpFilter.html'
    
})
export class EmpFilterComponent {

    @Input()
    All: number;
    @Input()
    Female: number;
    @Input()
    Male: number

    @Output()
    outputVariable: string = "this is from Chind Component";
    selectedValue: string = "All";
    @Output()
    countradiButtonSelectionChanges: EventEmitter<string> = new EventEmitter<string>();


    constructor() {
        //this.Male = 2;
        //this.Female = 3;
        //this.All = 5;
    }

    OnSelectionOfRadiButton(input: string): void 
    {
        console.log(input);
        this.countradiButtonSelectionChanges.emit(input);  
    }
}