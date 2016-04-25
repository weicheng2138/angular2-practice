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
        
            <!--<paper-dropdown-menu label="Dinosaurs">-->
               <!--<paper-listbox>-->
                    <!--<paper-item>Item 1</paper-item>-->
                    <!--<paper-item>Item 2</paper-item>-->
                <!--</paper-listbox>-->
            <!--</paper-dropdown-menu>-->
            <paper-listbox selected="0">
                <paper-item>Item 1</paper-item>
                <paper-item>Item 2</paper-item>
            </paper-listbox>
            
            <!--<paper-menu selected="0">-->
                <paper-item raised>Item 1</paper-item>
                <paper-item>Item 2</paper-item>
            <!--</paper-menu>-->
            
            
            
            
        
        <ul>
            <li *ngFor="#soldier of soldiers"
                (click)="onSelect(soldier)"   
                [class.clickedSoldier]="selectedSoldier === soldier"
                style="cursor: pointer"
            >Soldier {{soldier.name}}  </li>
        </ul>
        
        
        <select [(ngModel)]="optionSelectedSoldier">
            <option *ngFor="#soldier of soldiers" [ngValue]="soldier"
                style="cursor: pointer"
            >Soldier {{soldier.name}}</option>
        </select>
        
        
        
        
        
        
        <soldier *ngIf="selectedSoldier !== null" [soldier]="selectedSoldier"> </soldier>
        <soldier *ngIf="optionSelectedSoldier !== null" [soldier]="optionSelectedSoldier"> </soldier>
        
    
       
        
    `,
    directives: [SoldierComponent],
    providers: [SoldierService],
    styleUrls: ["../src/css/soldier-list.component.css"]

})
export class SoliderListComponent implements OnInit {
    public changeColor = false;
    public selectedSoldier = null;
    public soldiers:Soldier[];
    public optionSelectedSoldier = null;


    constructor(private _soldierService:SoldierService) {
    }

    ngOnInit():any {
        this.getSoldiers();
    }

    getSoldiers() {
        this._soldierService.getSoldiers().then((soldiers:Soldier[]) => this.soldiers = soldiers);
    }

    onSelect(soldier) {
        this.selectedSoldier = soldier;
    }

    onOptionSelected(soldier) {
        this.optionSelectedSoldier = soldier;
    }

    onH2Select() {
        this.changeColor = true;
    }
}