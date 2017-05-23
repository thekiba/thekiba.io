import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';

@Component({
    selector: 'terminal',
    template: `<div [innerHTML]="text | async | code"></div>`,
    styleUrls: [ 'terminal.component.css' ]
})
export class TerminalComponent implements OnInit {

    @Output() ngChanged = new EventEmitter();

    text: Observable<string>;

    originalText: string = `// Kiba.ts
01: import { Record } from 'immutable';
02: 
03: class Kiba extends Record({ salary: Infinity }, 'Kiba') {};
04: 
05: export default new Kiba();


// Job.ts
01: import { Record } from 'immutable';
02: 
03: const defaultJob = {
04:     isBest: false,
05:     salary: -Infinity
06: };
07: 
08: class Job extends Record(defaultJob, 'Job') {};
09: 
10: export default new Job();


// Compare.ts
01: import 'EmailService';
02: 
03: import Kiba from './Kiba';
04: import Job from './Job';
05: 
06: try {
07: 
08:     if (Job.salary < Kiba.salary)
09:         throw new Error('Salary lower than Infinity!');
10: 
11:     if (!Job.isBest)
12:         throw new Error('Job is\`t a perfect!');
13: 
14: } catch () {
15: 
16:     document.href = 'hh.ru';
17: 
18: } finally {
19: 
20:     EmailService({
21:         to: 'Kiba <hr@thekiba.io>',
22:         with: Job
23:     }).send();
24: 
25: }

// Make with ❤ in Montenegro.`;

    ngOnInit() {
        const random = () => Math.random() * 10 + 25;

        this.text = Observable.from(this.originalText.split(''))
            .delay(1000)
            .map(char => Observable.of(char).delay(char === ' ' ? 65 : random()))
            .concatAll()
            .do(() => this.ngChanged.emit())
            .scan((acc, char) => acc + char, '');
    }

}