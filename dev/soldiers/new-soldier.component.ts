import {Component} from "angular2/core";
import {SoldierService} from "./soldier.service";
import {Router} from "angular2/router";
import {Soldier} from "./soldier";

@Component({
    template: `
        <h2>Create a Soldier here...</h2>
        <div>
            <paper-input label="Name" type="text" id="name" #name> </paper-input>
        </div>
        <div>
            <paper-input label="Power" type="number" id="power" #power> </paper-input>
        </div>
        <div>
            <paper-input label="Health" type="number" id="health" #health> </paper-input>
        </div>
        <paper-button (click)="onAddSoldier(name.value, power.value, health.value)">Create Soldier</paper-button>
    `,
    styles: [`
        paper-button {
            margin-top: 10px;
            padding: 50px;
            color: whitesmoke;
            background: gray;
        }
        paper-input {
            margin: 0px;
            padding: 0px;
        }
    `],
    providers: [SoldierService]

})
export class NewSoldierComponent {
    constructor(private _soldierService: SoldierService, private _router: Router) {};

    onAddSoldier(name, power, health) {
        let soldier: Soldier = {name: name, power: power, health: health};
        this._soldierService.insertSoldier(soldier);
        this._router.navigate(['Soldiers']);
    }

}