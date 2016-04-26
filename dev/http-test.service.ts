import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";
import 'rxjs/add/operator/map'; //deal with _http.get().map()

@Injectable()
export class HTTPTestService {
    constructor(private _http: Http) {}

    getEmployee() {


        // return this._http.get('http://date.jsontest.com')
        //     .map(res => res.json()); //extract the resource

        return this._http.get('http://localhost:8080/api/employees')
            .map(res => res.json()); //extract the resource
    }

    postEmployee() {
        // var json = JSON.stringify({ username: '0988788290', password: '0988788290' });
        var json = JSON.stringify({ employeeId: "0027", firstName: "Selia", lastName: "Huag", cellphone: "0977383746" });
        var params = 'json=' + json;
        // var body = "username=" + "0988788290" + "&password=" + "0988788290";
        var body = 'employeeId=' + '0027'+ '&firstName=' + 'Selina' + '&lastName=' + 'Huang' + '&cellphone=' + '0977483746';

        var header = new Headers();
        // header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Content-Type', 'application/json');



        return this._http.post("http://localhost:8080/api/employees", json, {headers: header})
            .map(response => {
                console.log(response);
                response.json()});

    }

    updateEmployee() {
        var json = JSON.stringify({ employeeId: "0027", firstName: "Selina", lastName: "Ken", cellphone: "0977483746" });
        var header = new Headers();
        // header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Content-Type', 'application/json');

        return this._http.put("http://localhost:8080/api/employees/0027", json, {headers: header})
            .map(response => {
                console.log(response);
                response.json()});

    }

    deleteEmployee() {

        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this._http.delete('http://localhost:8080/api/employees/0027', {headers: header});

    }
}