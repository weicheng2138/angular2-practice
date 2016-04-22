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
                <label>Name: </label>
                <input type="text" id="name" 
                [ngFormControl]="myForm.controls['name']" 
                >
            </div>
            <div>
                <label>Level: </label>
                <input type="number" id="level"
                [ngFormControl]="myForm.controls['level']"
                >
                <span *ngIf="!myForm.controls['level'].valid">Not Valid</span>
            </div>
            <div>
                <label>Armor: </label>
                <input type="text" id="armor"
                [ngFormControl]="myForm.controls['armor']"
                >
            </div>
            <div>
                <label>Sword: </label>
                <input type="text" id="sword"
                [ngFormControl]="myForm.controls['sword']"
                >
            </div>
            <div>
                <label>Health: </label>
                <input type="number" id="health"
                [ngFormControl]="myForm.controls['health']"
                >
            </div>
            <button type="submit" [disabled]="!myForm.valid">Create Knight</button>
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
            border: 1px solid red;
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
