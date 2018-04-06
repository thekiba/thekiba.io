import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { concatMap, delay, scan } from 'rxjs/operators';

function randomDelayWrapper(char): Observable<string> {
    const timeout: number = char === ' ' ? 35 : (Math.random() * 10 + 25);

    return of(char).pipe(delay(timeout));
}

function typewriterWrapper(text: string): Observable<string> {
    return from(text.split(''))
        .pipe(
            delay(1000),
            concatMap(randomDelayWrapper),
            scan((acc, char) => acc + char, '')
        );
}

const TERMINAL_TEXT = `export default {
  name: 'Andrew Grekov',
  company: 'IndigoSoft',
  telegram: '@thekiba',
  email: 'hr@thekiba.io'
};`;

@Component({
    selector: 'app-terminal',
    template: `<div [innerHTML]="text$ | async | code"></div>`,
    styleUrls: [ 'terminal.component.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalComponent {

    text$: Observable<string> = typewriterWrapper(TERMINAL_TEXT);

}
