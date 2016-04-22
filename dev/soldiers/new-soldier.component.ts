import {Component, OnInit} from "angular2/core";
import {SoldierService} from "./soldier.service";
import {Router, RouteParams} from "angular2/router";
import {Soldier} from "./soldier";

@Component({
    template: `
        <form #myForm="ngForm" (ngSubmit)="onAddSoldier(name.value, power.value, health.value)">
            <h2>Create a Soldier here...</h2>
            <div>
                <paper-input label="Name" type="text" id="name" #name value="{{passedName}}" required> </paper-input>
            </div>
            <div>
                <paper-input label="Power" type="number" id="power" #power required> </paper-input>
            </div>
            <div>
                <paper-input label="Health" type="number" id="health" #health required> </paper-input>
            </div>
            <!--<paper-button -->
                <!--type="submit"-->
            <!--&gt;Create Soldier</paper-button>-->
            <button type="submit">Create Soldier</button>
        </form>
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
export class NewSoldierComponent implements OnInit{
    public passedName = "";

    constructor(private _soldierService: SoldierService, private _router: Router, private _routeParams: RouteParams) {};

    ngOnInit():any {
        this.passedName = this._routeParams.get('name');
    }

    onAddSoldier(name, power, health) {
        let soldier: Soldier = {name: name, power: power, health: health};
        this._soldierService.insertSoldier(soldier);
        this._router.navigate(['Soldiers']);
    }

}

//                (click)="onAddSoldier(name.value, power.value, health.value)"
