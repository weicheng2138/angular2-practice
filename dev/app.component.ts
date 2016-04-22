import {Component} from 'angular2/core';
import {KnightListComponent} from "./knights/knight-list.component";
import {SoliderListComponent} from "./soldiers/solider-list.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {NewKnightComponent} from "./knights/new-knight.component";
import {NewSoldierComponent} from "./soldiers/new-soldier.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Knights']">Knights</a>
                <a [routerLink]="['NewKnight']">New Knight</a>
                <a [routerLink]="['Soldiers']">Soldiers</a>
                <a [routerLink]="['NewSoldier']">NewSoldier</a>
            </nav>
        </header>
        <h1 c>Angular 2 Kingdom</h1>
        
        
        <!--router implementation-->
        <div class="main">
            <router-outlet></router-outlet>
        </div>
        <!--<knight-list></knight-list>-->
        <!--<soldier-list></soldier-list>-->
        


    `,
    directives: [KnightListComponent, SoliderListComponent, ROUTER_DIRECTIVES],
    styleUrls: ["../src/css/app.css"]
})

@RouteConfig([
    {path: '/knights', name: 'Knights', component: KnightListComponent, useAsDefault: true},
    {path: '/newknight', name: 'NewKnight', component: NewKnightComponent},
    // Old way to pass the value by router
    // {path: '/newknight/:name', name: 'NewKnightFromKnight', component: NewKnightComponent},

    {path: '/soldiers', name: 'Soldiers', component: SoliderListComponent},
    {path: '/newsoldier', name: 'NewSoldier', component: NewSoldierComponent}
])
export class AppComponent {
    

    
}