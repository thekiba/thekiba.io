import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
    selector: 'terminal',
    template: `<div [innerHTML]="text | async | code"></div>`,
    styleUrls: [ 'terminal.component.css' ]
})
export class TerminalComponent implements OnInit {

    @Output() ngChanged = new EventEmitter();

    text: Observable<string>;

    originalText: string = `// Kiba.ts
import { Record } from 'immutable';

class Kiba extends Record({ salary: Infinity }, 'Kiba') {};

export default new Kiba();


// Job.ts
import { Record } from 'immutable';

const defaultJob = {
    isBest: false,
    salary: -Infinity
};

class Job extends Record(defaultJob, 'Job') {};

export default new Job();


// Compare.ts
import 'EmailService';

import Kiba from './Kiba';
import Job from './Job';

if (Job.salary < Kiba.salary)
    throw new Error('Don\`t write me email!');

if (!Job.isBest)
    throw new Error('Don\`t write me email!');

EmailService({
    to: 'Kiba <hr@thekiba.io>',
    with: Job
}).send();`;

    ngOnInit() {
        const random = () => Math.random() * 75 + 25;

        this.text = Observable.from(this.originalText.split(''))
            .delay(1000)
            .map(char => Observable.of(char).delay(random()))
            .concatAll()
            .do(() => this.ngChanged.emit())
            .scan((acc, char) => acc + char, '');
    }

}