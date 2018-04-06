import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'code', pure: true })
export class CodePipe implements PipeTransform {

    transform(text: string) {
        const blinker = `<div class="blinker-container"><span class="blinker"></span></div>`;

        if (!text) {
            return blinker;
        }

        let a = text.replace(/</ig, '&lt;').replace(/>/ig, '&gt;') + blinker;

        if (((a.match(/'/g) || []).length % 2) === 1) {
            a += '\'';
        }

        if ((a.match(/\{/g) || []).length !== (a.match(/\}/g) || []).length) {
            a += '}';
        }

        if ((a.match(/\(/g) || []).length !== (a.match(/\)/g) || []).length) {
            a += ')';
        }
        return a
            .replace(/(export |default )/ig, '<span class="operator">$1</span>')
            .replace(/(\/\/.*|\d+\:)/ig, '<span class="comment">$1</span>')
            .replace(/('[^']*')/ig, '<span class="string">$1</span>')
            // .replace('hr@thekiba.io', '<a href="mailto:hr@thekiba.io" class="string">hr@thekiba.io</a>')
            // .replace('\'@thekiba\'', '\'<a href="https://t.me/thekiba" class="string">@thekiba</a>\'')
            .replace('❤', '<span class="emoji">💜</span>')
            .replace('∆', '<span class="emoji">🦊</span>')
            .replace('ƒ', '<span class="emoji">🚀</span>')
            .replace('キ', '<span class="emoji">キ</span>')
            .replace('バ', '<span class="emoji">バ</span>');
    }

}
