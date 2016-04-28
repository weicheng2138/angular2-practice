import {Component} from 'angular2/core';
import {ChildComponent} from "./child.component";

@Component({
    selector: 'parent',
    template: `        <div class="parent">
            <h2>Parent</h2>
            <p>Value entered in child component:{{childValue}}</p>
            <input type="text" #parentInput (keyup)="0"><br>
            <div>
                <child [passedValue]="parentInput.value" (childChanged)="childValue=$event"></child>
            </div>
        </div>
        
    `,
    directives: [ChildComponent]

})
export class ParentComponent{
    childValue: string;

}
