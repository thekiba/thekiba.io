import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'code' })
export class CodePipe implements PipeTransform {

    transform(text: string) {
        const blinker = `<div class="blinker-container"><span class="blinker"></span></div>`;
 
        if (!text)
            return blinker;

        let a = text.replace(/</ig, '&lt;').replace(/>/ig, '&gt;') + blinker;

        if (((a.match(/'/g)||[]).length % 2) == 1) {
            a += "'";
        }

        if ((a.match(/\{/g)||[]).length !== (a.match(/\}/g)||[]).length) {
            a += "}";
        }

        if ((a.match(/\(/g)||[]).length !== (a.match(/\)/g)||[]).length) {
            a += ")";
        }
        return a
            .replace(/(if |new |throw|extends|\= | &lt; | &gt; |export |default |import |from |try |catch |finally )/ig, '<span class="operator">$1</span>')
            .replace(/(\()(!)/ig, '$1<span class="operator">$2</span>')
            .replace(/(true|false)/, '<span class="boolean">$1</span>')
            .replace(/(\/\/.*|\d+\:)/ig, '<span class="comment">$1</span>')
            .replace(/(class )/ig, '<span class="class">$1</span>')
            .replace(/(const)/ig, '<span class="const">$1</span>')
            .replace(/()(Kiba|Job|Record|Error|EmailService)([(])/ig, '$1<span class="keyword">$2</span>$3')
            .replace(/(\>)(Kiba |Job )/ig, '$1<span class="keyword">$2</span>')
            .replace(/(\.)(send)([(])/ig, '$1<span class="function">$2</span>$3')
            .replace(/('[^']*')/ig, '<span class="string">$1</span>')
            .replace(/(Infinity)/ig, '<span class="infinity">$1</span>')
            .replace(/(defaultJob)/ig, '<span class="constant">$1</span>')
            .replace('hr@thekiba.io', '<a href="mailto:hr@thekiba.io" class="pulse string">hr@thekiba.io</a>')
            .replace('hh.ru', '<a href="https://hh.ru" class="string">hh.ru</a>')
            .replace('❤', '💜');
    }

}