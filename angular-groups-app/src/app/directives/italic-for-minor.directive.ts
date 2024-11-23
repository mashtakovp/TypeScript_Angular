import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appItalicForMinor]',
})
export class ItalicForMinorDirective implements OnInit {
    @Input('appItalicForMinor') birthYear!: number; // Год рождения студента

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthYear;

        if (age < 18) {
            this.renderer.setStyle(this.el.nativeElement, 'font-style', 'italic');
        }
    }
}