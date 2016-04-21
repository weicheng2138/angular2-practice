import {Component} from 'angular2/core';

@Component({
    selector: 'knight',
    template: `
        <div>
            <label for="name">Name: </label>
            <input [(ngModel)]="knight.name" type="text" id="name">
        </div>
        <div>
            <label for="level">Level: </label>
            <input [(ngModel)]="knight.level" type="text" id="level">
        </div>
        <div>
            <label for="armor">Armor: </label>
            <input [(ngModel)]="knight.armor" type="text" id="armor">
        </div>
        <div>
            <label for="sword">Sword: </label>
            <input [(ngModel)]="knight.sword" type="text" id="sword">
        </div>
        <div>
            <label for="health">Health: </label>
            <input [(ngModel)]="knight.health" type="text" id="health">
        </div>`,
    //relative to class KnightComponent's knight
    //data from knightList will flow in to it
    inputs: ["knight"],
    styles: [`
        label {
            display: inline-block;
            width: 60px;
        }
        input {
            width: 250px;
        }
    `]




})
export class KnightComponent{
    public knight = {};

}