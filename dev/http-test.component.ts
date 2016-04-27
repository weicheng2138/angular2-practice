import {Component} from 'angular2/core';
import {HTTPTestService} from "./http-test.service";

@Component({
    selector: 'http-test',
    template: `
        <button (click)="onTestGet()">Test Get Request</button>
        <p>Output: {{getData}}</p>
        <button (click)="onTestPost()">Test Post Request</button>
        <p>Output: {{postData}}</p>
        <button (click)="onTestPut()">Test Put Request</button>
        <p>Put: {{putData}}</p>
        <button (click)="onTestDelete()">Test Delete Request</button>
        
    `,
    providers: [HTTPTestService]
})
export class HTTPTestComponent {
    getData: string;
    postData: string;
    putData: string;

    constructor(private _httpService: HTTPTestService) {}

    onTestGet() {
        this._httpService.getEmployee()
            .subscribe(
                data => this.getData = JSON.stringify(data), //success part
                error => alert(error), //error case
                () => console.log("Finished") //pass a function when everything is completed
            );
    }

    onTestPost() {
        let employee = { employeeId: "0027", firstName: "Selia", lastName: "Huag", cellphone: "0977383746" };
        this._httpService.postEmployee(employee)
            .subscribe(
                data => this.postData = JSON.stringify(data), //success part
                error => alert(error), //error case
                () => console.log("Finished") //pass a function when everything is completed
            );
    }

    onTestPut() {
        let modifiedEmployee = { employeeId: "0027", firstName: "Selina", lastName: "Ken", cellphone: "0977483746" };
        this._httpService.updateEmployee(modifiedEmployee)
            .subscribe(
                data => this.putData = JSON.stringify(data), //success part
                error => alert(error), //error case
                () => console.log("Finished") //pass a function when everything is completed
            );
    }


    onTestDelete() {
        this._httpService.deleteEmployee()
            .subscribe(
                response => console.log(response),
                error => alert(error)
            );
    }
}