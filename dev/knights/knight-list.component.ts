import {Component, OnInit} from 'angular2/core';
import {KnightComponent} from "./knight.component";
import {KnightService} from "./knight.service";
import {Knight} from "./knight";

@Component({
    selector: 'knight-list',
    template: `
        <h2 (click)="onH2Select()"
            [class.clicked] ="changeColor === true"
        >List of Knight
        </h2>
        <ul>
            <li *ngFor="#knight of knights"
                (click)="onSelect(knight)"   
                [class.clicked]="selectedKnight === knight"
                style="cursor: pointer"
            >Knight  {{knight.name | uppercase}} </li>
        </ul>
        
        
        <knight *ngIf="selectedKnight !== null" [knight]="selectedKnight"> </knight>
    `,
    directives: [KnightComponent],
    providers: [KnightService],
    styleUrls: ["../src/css/knight-list.component.css"]
})
export class KnightListComponent implements OnInit{
    public knights: Knight[];
    public selectedKnight = null;
    public changeColor = false;


    constructor(private _knightService: KnightService) {}



    onH2Select() {
        this.changeColor =true;
    }

    ngOnInit():any {
        this.getKnights();
    }
    
    onSelect(knight) {
        this.selectedKnight = knight;
    }

    getKnights() {
        this._knightService.getKnights().then((knights: Knight[]) => this.knights = knights);
    }

    
}