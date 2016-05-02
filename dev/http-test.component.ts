import {Component, OnInit} from 'angular2/core';
import {HTTPTestService} from "./http-test.service";
import {Employee} from "./employees/employee";

@Component({
    selector: 'http-test',
    template: `
        <button (click)="onTestGet()">Test Get Request</button>
        <ul>
            <li *ngFor="#employee of getEmployee"
            >Employee {{employee.employeeId}} {{employee.firstName}} {{employee.lastName}}</li>
        </ul>
        
        <div>
            employeeId: <input [(ngModel)]="newEmployee.employeeId"><br>
            firstName: <input [(ngModel)]="newEmployee.firstName"><br>
            lastName: <input [(ngModel)]="newEmployee.lastName"><br>
            cellphone: <input [(ngModel)]="newEmployee.cellphone">
        </div>
        <button (click)="onTestPost()">Test Post Request</button><br><br>
        
        
        <button (click)="onTestPut()">Test Put Request</button>
        <p>Put: {{putData}}</p><br>
        
        <input [(ngModel)]="deleteEmployeeId">
        <button (click)="onTestDelete()">Test Delete Request</button>
        
    `,
    providers: [HTTPTestService]
})
export class HTTPTestComponent implements OnInit{
    postData: string;
    putData: string;
    newEmployee: Employee = new Employee();
    deleteEmployeeId: string;

    getEmployee: Employee[];

    constructor(private _httpService: HTTPTestService) {}

    ngOnInit():any {}


    onTestGet() {
        this._httpService.getEmployee()
            .subscribe(
                data => {
                    this.getEmployee = data;

                }, //success part
                error => alert(error), //error case
                () => console.log("Finished") //pass a function when everything is completed
            );
    }

    onTestPost() {
        // let employee = { employeeId: "0027", firstName: "Selia", lastName: "Huag", cellphone: "0977383746" };
        this._httpService.postEmployee(this.newEmployee)
            .subscribe(
                data => {
                    this.postData = JSON.stringify(data);
                    this.getEmployee.push(this.newEmployee);
                }, //success part
                error => alert(error), //error case
                () => console.log("Finished") //pass a function when everything is completed
            );
    }

    onTestPut() {
        let modifiedEmployee = { employeeId: "0099", firstName: "Selia", lastName: "Javvee", cellphone: "0977383746", englishName: "YOYOMAN" };
        this._httpService.updateEmployee(modifiedEmployee)
            .subscribe(
                data => this.putData = JSON.stringify(data), //success part
                error => alert(error), //error case
                () => console.log("Finished") //pass a function when everything is completed
            );
    }


    onTestDelete() {
        let temp = this.deleteEmployeeId;
        this._httpService.deleteEmployee(this.deleteEmployeeId)
            .subscribe(
                response => {
                    let array = this.getEmployee;
                    for(let i = 0; i < array.length; i++) {
                        if (array[i].employeeId === temp) {
                            array.splice(i, 1);
                        }
                    }
                },
                error => alert(error)
            );
    }
}