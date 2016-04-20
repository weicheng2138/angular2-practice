import {Component} from 'angular2/core';

@Component({
    selector: 'knight',
    template: `
        <input [(ngModel)]="knight.name" type="text">
        <div>
            level: {{knight.level}}<br>
            armor: {{knight.armor}}<br>
            sword: {{knight.sword}}<br>
            health: {{knight.health}}<br>
        </div>
    `,
    //relative to class KnightComponent's knight
    //data from knightList will flow in to it
    inputs: ["knight"]



})
export class KnightComponent{
    public knight = {};

}