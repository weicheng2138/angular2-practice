import {Component, OnInit} from "angular2/core";
import {KnightService} from "./knight.service";
import {Knight} from "./knight";
import {Router, RouteParams} from "angular2/router";

@Component({
    template: `
        <h2>Create a Knight here...</h2>
        <form #myForm="ngForm" (ngSubmit)="onSubmit()">
            <div>
                <label>Name: </label>
                <input type="text" id="name"
                    ngControl="name"
                    [(ngModel)]="newKnight.name"
                    required
                >
            </div>
            <div>
                <label>Level: </label>
                <input type="number" id="level"
                    ngControl="level"
                    [(ngModel)]="newKnight.level"
                    required
                >
            </div>
            <div>
                <label>Armor: </label>
                <input type="text" id="armor"
                    ngControl="armor"
                    [(ngModel)]="newKnight.armor"
                    required
                >
            </div>
            <div>
                <label>Sword: </label>
                <input type="text" id="sword"
                    ngControl="sword"
                    [(ngModel)]="newKnight.sword"
                    required
                >
            </div>
            <div>
                <label>Health: </label>
                <input type="number" id="health"
                    ngControl="health"
                    [(ngModel)]="newKnight.health"
                    required
                >
            </div>
            <button type="submit" [disabled]="!myForm.form.valid">Create Knight</button>
        </form>
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
        .ng-invalid{
            border: 2px solid red;
        }
    `],
    providers: [KnightService]


})
export class NewKnightComponent implements OnInit{

    public newKnight: Knight;

    constructor(private _knightService: KnightService, private _router: Router, private _routeParams: RouteParams) {}

    ngOnInit():any {
        this.newKnight = {name: this._routeParams.get('name'), level: null, armor: '', sword: '', health: null};
        // this.passedArmor = this._routeParams.get('armor');
        // this.knight = <Knight>this._routeParams.params;
    }


    onSubmit() {
        this._knightService.insertKnight(this.newKnight);
        this._router.navigate(['Knights']);
    }

}
