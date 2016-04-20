import {Component} from 'angular2/core';

@Component({
    selector: 'soldier',
    template: `
        <input [(ngModel)]="soldier.name" type="text">
        <div>
            power: {{soldier.power}}<br>
            health: {{soldier.health}}<br>
        </div>
    `,
    //relative to class KnightComponent's knight
    //data from soldierList will flow in to it
    inputs: ["soldier"]



})
export class SoldierComponent{
    public soldier = {};

}