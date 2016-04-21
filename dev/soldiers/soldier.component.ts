import {Component} from 'angular2/core';

@Component({
    selector: 'soldier',
    template: `
        <div>
            <label for="name ">Name: </label>
            <input [(ngModel)]="soldier.name" type="text">

        </div>
        <div>
            <lable for="power">Power: </lable>
            <input [(ngModel)]="soldier.power" type="text">

        </div>
        <div>
            <lable for="health">Health: </lable>
            <input [(ngModel)]="soldier.health" type="text">
        </div>
    `,
    //relative to class KnightComponent's knight
    //data from soldierList will flow in to it
    inputs: ["soldier"]
})
export class SoldierComponent{
    public soldier = {};

}