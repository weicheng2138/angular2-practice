import {Component} from 'angular2/core';
import {DataService} from "./data.service";

@Component({
    selector: 'comp-2',
    template: `
        <h2>Component 2</h2>
        <div>
            <button (click)="onGetData()">Get random data</button>
            <p>Random Data: {{data}}</p>
            <input type="text" #input>
            <button (click)="onAddItem(input.value)">Add</button>
        </div>
    `,
    // providers: [DataService]
})
export class Comp2Component{
    data: string;

    constructor(private _dataService: DataService) {}

    onGetData() {
        this.data = this._dataService.getRandomData();
    }
    onAddItem(data: string) {
        this._dataService.inserData(data);
    }

}