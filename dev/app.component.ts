import {Component} from 'angular2/core';
import {KnightListComponent} from "./knights/knight-list.component";
import {SoliderListComponent} from "./soldiers/solider-list.component";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {NewKnightComponent} from "./knights/new-knight.component";
import {NewSoldierComponent} from "./soldiers/new-soldier.component";
import {HTTPTestComponent} from "./http-test.component";
import {PipeComponent} from "./pipe.component";
import {ParentComponent} from "./input-output/parent.component";
import {FakeAppComponent} from "./dependency-injection/fake-app.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <!--<a [routerLink]="['Knights']">Knights</a>-->
                <!--<a [routerLink]="['NewKnight']">New Knight</a>-->
                <!--<a [routerLink]="['Soldiers']">Soldiers</a>-->
                <!--<a [routerLink]="['NewSoldier']">NewSoldier</a>-->
                <!--<a [routerLink]="['Pipe']">Pipe</a>-->
                <!--<a [routerLink]="['HTTP-Test']">HTTP-Test</a>-->
                <!--<a [routerLink]="['Parent']">Parent-child-dataPassing</a>-->
                <!--<a [routerLink]="['Fake-App']">Fake-App</a>-->
                <paper-tabs selected="0" align-bottom>
                    <paper-tab (click)="onDirectToKnights()">Knights</paper-tab>
                    <paper-tab (click)="onDirectToNewKnight()">New Knight</paper-tab>
                    <paper-tab (click)="onDirectToSoldiers()">Soldiers</paper-tab>
                    <paper-tab (click)="onDirectToNewSoldier()" >New Soldier</paper-tab>
                    <paper-tab (click)="onDirectToPipe()">Pipe</paper-tab>
                    <paper-tab (click)="onDirectToHttpTest()">Http-Test</paper-tab>
                    <paper-tab (click)="onDirectToParent()">Parent</paper-tab>
                    <paper-tab (click)="onDirectToFakeApp()">Fake-App</paper-tab>
                </paper-tabs>
            </nav>
            
        </header>
        
        
        
        <h1>Angular 2 Kingdom</h1>
        
        
        <!--router implementation-->
        <div class="main">
            <router-outlet></router-outlet>
        </div>
        
        
        


    `,
    directives: [ROUTER_DIRECTIVES],
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
    {path: '/parent', name: 'Parent', component: ParentComponent},
    {path: '/fake-app', name: 'Fake-App', component: FakeAppComponent}



])
export class AppComponent {

    constructor(private _router: Router) {}

    onDirectToKnights() {
        this._router.navigate(['Knights']);
    }

    onDirectToNewKnight() {
        this._router.navigate(['NewKnight']);
    }

    onDirectToSoldiers() {
        this._router.navigate(['Soldiers']);
    }

    onDirectToNewSoldier() {
        this._router.navigate(['NewSoldier']);
    }

    onDirectToPipe() {
        this._router.navigate(['Pipe']);
    }

    onDirectToHttpTest() {
        this._router.navigate(['HTTP-Test']);
    }

    onDirectToParent() {
        this._router.navigate(['Parent']);
    }

    onDirectToFakeApp() {
        this._router.navigate(['Fake-App']);
    }

    
}