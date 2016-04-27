import {Component} from 'angular2/core';

@Component({
    selector: 'pipe',
    template: `
            <div class="pipes">
                <h2>Date Pipe</h2>
                <div>{{date | date: 'fullDate'}}</div>
                <h2>Number Pipe</h2>
                <div>{{4.5664 | number: '1.2-2'}}</div>
                <h2>Currency Pipe</h2>
                <div>{{100 | currency: 'EUR':true:'1.4-4'}}</div>
                <h2>Stateful Pipe</h2>
                <div>{{randomData | async}}</div>
            </div>
    `,
})
export class PipeComponent{
    date = new Date();
    randomData = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Random data!'), 1000);
    });





}