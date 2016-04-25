import {Component, OnInit} from "angular2/core";
import {SoldierService} from "./soldier.service";
import {Router, RouteParams} from "angular2/router";
import {Soldier} from "./soldier";

@Component({
    template: `
        <form #myForm="ngForm" (ngSubmit)="onSubmit()">
            <h2>Create a Soldier here...</h2>
            <div>
                <paper-input label="Name" type="text" id="name"   
                required auto-validate error-message="needs some text!" 
                ngControl="name" 
                [(ngModel)]="newSoldier.name" ngDefaultControl
                > </paper-input>
            </div>
            <div>
                <paper-input label="Power" id="power" 
                required auto-validate pattern="[0-9]*" error-message="number only!"
                ngControl="power" 
                [(ngModel)]="newSoldier.power" ngDefaultControl> </paper-input>
            </div>
            <div>
                <paper-input label="Health" id="health" 
                required auto-validate pattern="[0-9]*" error-message="number only!"
                ngControl="health" 
                [(ngModel)]="newSoldier.health" ngDefaultControl> </paper-input>
            </div>
            
            <paper-button>
                <button type="submit">Create Soldier</button>
            </paper-button>
            
        </form>
    `,
    styles: [`
        paper-button {
            margin-top: 10px; /*預留上部空間*/
            color: whitesmoke;
            background: gray;
        }
        paper-button button {
            cursor: pointer;
            color: whitesmoke;
            font-size: 18px;
            background-color: transparent;
            border-color: transparent;
        }
        paper-input {
            margin: 0px;
            padding: 0px;
        }
    `],
    providers: [SoldierService]

})
export class NewSoldierComponent implements OnInit{
    newSoldier: Soldier;


    constructor(private _soldierService: SoldierService, private _router: Router, private _routeParams: RouteParams) {};

    ngOnInit():any {
        this.newSoldier = {name: this._routeParams.get('name'), power: null, health: null};
    }

    onSubmit() {
        this._soldierService.insertSoldier(this.newSoldier);
        this._router.navigate(['Soldiers']);
    }

}

