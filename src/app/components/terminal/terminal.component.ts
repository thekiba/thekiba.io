import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/scan';

@Component({
    selector: 'app-terminal',
    template: `<div [innerHTML]="text$ | async | code"></div>`,
    styleUrls: [ 'terminal.component.css' ]
})
export class TerminalComponent {

    originalText: string = `01: export default {
02:   name: 'キバ',
03:   bio: '∆ Reactive Fox ƒ',
04:   position: 'Lead Frontend',
05:   telegram: '@thekiba',
06:   email: 'hr@thekiba.io'
07: };

// Make with ❤ in Anywhere.`;

  text$: Observable<string> =
    Observable.from(this.originalText.split(''))
              .delay(1000)
              .map(char => Observable.of(char).delay(char === ' ' ? 35 : (Math.random() * 10 + 25)))
              .concatAll()
              .scan((acc, char) => acc + char, '');

}
