import {Component, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'child',
    template: `    
        <div>
            <h2>Child</h2>
            <p>Value entered in parent component: {{parentValue}}</p>
            <input type="text" #childInput (keyup)="onChange(childInput.value)">   
        </div>
        
        
    `,
    inputs: ['parentValue: passedValue'], //setting an alias passedValue which is come from parent
    // outputs: ['childChanged'],

})
export class ChildComponent{
    parentValue: string;

    @Output()childChanged = new EventEmitter<string>();

    onChange(value: string) {
        this.childChanged.emit(value);
    }
}