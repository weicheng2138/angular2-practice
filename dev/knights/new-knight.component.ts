import {Component} from "angular2/core";
import {KnightService} from "./knight.service";
import {Knight} from "./knight";
import {Router} from "angular2/router";

@Component({
    template: `
        <h2>Create a Knight here...</h2>
        <div>
            <paper-input label="Name" type="text" id="name" #name> </paper-input>
        </div>
        <div>
            <paper-input label="Level" type="number" id="level" #level> </paper-input>
        </div>
        <div>
            <paper-input label="Armor" type="text" id="armor" #armor> </paper-input>
        </div>
        <div>
            <paper-input label="Sword" type="text" id="sword" #sword> </paper-input>
        </div>
        <div>
            <paper-input label="Health" type="number" id="health" #health> </paper-input>
        </div>
        <paper-button (click)="onAddKnight(name.value, level.value, armor.value, sword.value, health.value)">Create Knight</paper-button>
        `,
    styles: [`
        label {
            display: inline-block;
            width: 60px;
        }
        input {
            width: 250px;
        }
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
    providers: [KnightService]


})
export class NewKnightComponent {
    constructor(private _knightService: KnightService, private _router: Router) {}

    onAddKnight(name, level, armor, sword, health) {
        let knight: Knight = {name: name, level: level, armor: armor, sword: sword, health: health};
        this._knightService.insertKnight(knight);
        this._router.navigate(['Knights']);
    }
}