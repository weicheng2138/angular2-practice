import {Component, OnInit} from "angular2/core";
import {SoldierComponent} from "./soldier.component";
import {SoldierService} from "./soldier.service";
import {Soldier} from "./soldier";

@Component({
    selector: "soldier-list",
    template: `
        <h2 (click)="onH2Select()"
            [class.clicked] ="changeColor === true"
        >List of Soldier</h2>
        <p>
            
        </p>
        <ul>
            <li *ngFor="#soldier of soldiers"
                (click)="onSelect(soldier)"   
                [class.clickedSoldier]="selectedSoldier === soldier"
                style="cursor: pointer"
            >Soldier {{soldier.name}}  </li>
        </ul>
        <soldier *ngIf="selectedSoldier !== null" [soldier]="selectedSoldier"> </soldier>
    `,
    directives: [SoldierComponent],
    providers: [SoldierService],
    styleUrls: ["../src/css/soldier-list.component.css"]
    
})
export class SoliderListComponent implements OnInit{
    public changeColor = false;
    public selectedSoldier = null;
    public soldiers: Soldier[];

    constructor(private _soldierService: SoldierService){}

    ngOnInit():any {
        this.getSoldiers();
    }

    getSoldiers() {
        this._soldierService.getSoldiers().then((soldiers: Soldier[]) => this.soldiers = soldiers);
    }

    onSelect(soldier) {
        this.selectedSoldier= soldier;
    }

    onH2Select() {
        this.changeColor =true;
    }
}