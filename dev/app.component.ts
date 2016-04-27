import {Component} from 'angular2/core';
import {KnightListComponent} from "./knights/knight-list.component";
import {SoliderListComponent} from "./soldiers/solider-list.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {NewKnightComponent} from "./knights/new-knight.component";
import {NewSoldierComponent} from "./soldiers/new-soldier.component";
import {HTTPTestComponent} from "./http-test.component";
import {resolve} from "url";
import {PipeComponent} from "./pipe.component";
import {ParentComponent} from "./input-output/parent.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Parent']">Parent-child-dataPassing</a>
                <a [routerLink]="['Knights']">Knights</a>
                <a [routerLink]="['NewKnight']">New Knight</a>
                <a [routerLink]="['Soldiers']">Soldiers</a>
                <a [routerLink]="['NewSoldier']">NewSoldier</a>
                <a [routerLink]="['Pipe']">Pipe</a>
                <a [routerLink]="['HTTP-Test']">HTTP-Test</a>
            </nav>
        </header>
        <h1>Angular 2 Kingdom</h1>
        
        
        <!--router implementation-->
        <div class="main">
            <http-test></http-test>
            <pipe></pipe>
            <router-outlet></router-outlet>
        </div>
        
        <div>
            <parent></parent>
        </div>
        


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
    {path: '/newsoldier', name: 'NewSoldier', component: NewSoldierComponent},

    {path: '/pipe', name: 'Pipe', component: PipeComponent},
    {path: '/http-test', name: 'HTTP-Test', component: HTTPTestComponent},
    {path: '/parent', name: 'Parent', component: ParentComponent}


])
export class AppComponent {
    

    
}