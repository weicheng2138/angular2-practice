import {Injectable} from "angular2/core";
import {Employee} from "./employee";
import {Http} from "angular2/http";

@Injectable()
export class EmployeeService {

    constructor(public _http: Http) {}
    getEmployees() {
        // return Promise.resolve(SOLDIERS);
    }

    insertSoldier(employee: Employee) {
        // Promise.resolve(SOLDIERS).then((soldiers: Soldier[]) => soldiers.push(soldier));
    }
}