import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('appHighlight')
    public highlightColor: string;
    @Input()
    public defaultColor: string;
    constructor(private el: ElementRef) { }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
    @HostListener('mouseover')
    public onmouseover(): void {
        this.highlight(this.highlightColor || this.defaultColor || '#ccc');
    }
    @HostListener('mouseout')
    public onmouseout(): void {
        this.highlight(null);
    }
}
