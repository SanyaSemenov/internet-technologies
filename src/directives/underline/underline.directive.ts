import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
	selector: '[underline]'
})
export class UnderlineDirective implements AfterViewInit {
	@Input() underline: string = 'red';
	constructor(private elem: ElementRef) {}

	ngAfterViewInit(): void {
		const nativeElement = this.elem.nativeElement as HTMLElement;
		nativeElement.style.borderBottom = `2px solid ${this.underline}`;
	}
}
