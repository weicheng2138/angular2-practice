import {Component, OnInit} from "angular2/core";
import {KnightService} from "./knight.service";
import {Knight} from "./knight";
import {Router, RouteParams} from "angular2/router";
import {ControlGroup, FormBuilder, Validators, Validator} from "angular2/common";

@Component({
    template: `
        <h2>Create a Knight here...</h2>
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <div>
                <paper-input label="Name" [ngFormControl]="myForm.controls['name']" ngDefaultControl> </paper-input>
            </div>
            <div>
                <paper-input label="Level" [ngFormControl]="myForm.controls['level']" ngDefaultControl
                auto-validate pattern="[1-9]*" error-message="number only!" required> </paper-input>
            </div>
            <div>
                <paper-input label="Armor" [ngFormControl]="myForm.controls['armor']" ngDefaultControl> </paper-input>
            </div>
            <div>
                <paper-input label="Sword" [ngFormControl]="myForm.controls['sword']" ngDefaultControl> </paper-input>
            </div>
            <div>
                <paper-input label="Health" [ngFormControl]="myForm.controls['health']" ngDefaultControl
                auto-validate pattern="[1-9]*" error-message="number only!" required> </paper-input>
            </div>
            <paper-button>
                <button type="submit">Create Knight</button>
            </paper-button>
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
        paper-input {
            margin: 0px;
            padding: 0px;
        }
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
        
        
        
        
    `],
    providers: [KnightService]


})
export class NewKnightComponent implements OnInit{

    myForm: ControlGroup;

    constructor(
        private _knightService: KnightService,
        private _router: Router,
        private _routeParams: RouteParams,
        private _formBuilder: FormBuilder
    ) {}

    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'name': [this._routeParams.get('name'), Validators.required],
            'level': ['', Validators.required],
            'armor': ['', Validators.required],
            'sword': ['', Validators.required],
            'health': ['', Validators.required]
        });
    }

    onSubmit(value) {
        this._knightService.insertKnight(value);
        this._router.navigate(['Knights']);
    }

}
