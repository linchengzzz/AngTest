import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) { }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
    @HostListener('mouseover')
    public onmouseover(): void {
        this.highlight('yellow');
    }
    @HostListener('mouseout')
    public onmouseout(): void {
        this.highlight('red');
    }
}
