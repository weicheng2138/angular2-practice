import {Component} from 'angular2/core';
import {KnightListComponent} from "./knights/knight-list.component";
import {SoliderListComponent} from "./soldiers/solider-list.component";

@Component({
    selector: 'my-app',
    template: `
        <h1 c>Angular 2 Kingdom</h1>
        <h2 (click)="onSelect()"
            [class.clicked] ="changeColor === true"
        >List of Knight
        </h2>
        <knight-list></knight-list>
        <soldier-list></soldier-list>

        
        
    `,
    directives: [KnightListComponent, SoliderListComponent],
    styleUrls: ["../src/css/app.css"]
})

export class AppComponent {
    public changeColor = false;
    onSelect() {
        this.changeColor =true;
    }
}