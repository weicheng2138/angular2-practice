import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import 'rxjs/add/operator/map'; //deal with _http.get().map()

@Injectable()
export class HTTPTestService {
    constructor(private _http: Http) {}

    getEmployee() {


        return this._http.get('http://localhost:8080/api/employees')
            .map(response => response.json()); //extract the resource
    }

    postEmployee(object) {
        // var json = JSON.stringify({ username: '0988788290', password: '0988788290' });
        var json = JSON.stringify(object);
        var params = 'json=' + json;
        // var body = "username=" + "0988788290" + "&password=" + "0988788290";
        var body = 'employeeId=' + '0027'+ '&firstName=' + 'Selina' + '&lastName=' + 'Huang' + '&cellphone=' + '0977483746';

        var header = new Headers();
        // header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Content-Type', 'application/json');



        return this._http.post("http://localhost:8080/api/employees", json, {headers: header})
            .map(response => response.json());

    }

    updateEmployee(object) {
        var json = JSON.stringify(object);
        var header = new Headers();
        // header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Content-Type', 'application/json');

        return this._http.put("http://localhost:8080/api/employees/0027", json, {headers: header})
            .map(response => response.json());

    }

    deleteEmployee() {

        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this._http.delete('http://localhost:8080/api/employees/0027', {headers: header});

    }
}