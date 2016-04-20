import {Component} from "angular2/core";
import {SoldierComponent} from "./soldier.component";

@Component({
    selector: "soldier-list",
    template: `
        <h2 (click)="onH2Select()"
            [class.clicked] ="changeColor === true"
        >List of Soldier</h2>
        
        <ul>
            <li *ngFor="#soldier of soldiers"
                (click)="onSelect(soldier)"   
                [class.clickedSoldier]="selectedSoldier === soldier"
                style="cursor: pointer"
            >Soldier {{soldier.name}}  </li>
        </ul>
        <soldier [soldier]="selectedSoldier"> </soldier>
    `,
    directives: [SoldierComponent],
    styleUrls: ["../src/css/soldier-list.component.css"]
    
})
export class SoliderListComponent {
    public soldiers = [
        {name: "Jeff", power: 20, health: 100},
        {name: "John", power: 10, health: 100},
        {name: "Jason", power: 45, health: 100},
        {name: "Joe", power: 2, health: 100},
    ];

    public selectedSoldier = {};
    onSelect(soldier) {
        this.selectedSoldier= soldier;
    }

    public changeColor = false;
    onH2Select() {
        this.changeColor =true;
    }
}