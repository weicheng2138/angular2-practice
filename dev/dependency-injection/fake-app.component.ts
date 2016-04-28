import {Component} from 'angular2/core';
import {Comp1Component} from "./comp1.component";
import {Comp2Component} from "./comp2.component";

@Component({
    selector: 'fake-app',
    template: `        
        <section>
            <comp-1></comp-1>
        </section>
        <section>
            <comp-2></comp-2>
        </section>
        
    `,
    directives: [Comp1Component, Comp2Component]

})
export class FakeAppComponent{

}