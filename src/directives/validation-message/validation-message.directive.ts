import { Directive, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[validationMessage]'
})
export class ValidationMessageDirective implements OnInit, AfterViewInit {
	constructor(private el: ElementRef, private ngControl: NgControl) {}
	public parent: HTMLElement;
	public errorContainer: HTMLElement;
	private isPreviouslyValid: boolean = false;

	public ngOnInit() {
		this.ngControl.valueChanges.subscribe(value => {
			if (this.ngControl.valid) {
				this.removeMessage();
				return;
			}
			this.displayMessage(this.getFirstError());
			this.isPreviouslyValid = false;
		});
	}

	public ngAfterViewInit() {
		this.parent = (this.el.nativeElement as HTMLElement).parentElement;
		this.errorContainer = document.createElement('div');
		this.errorContainer.classList.add('error-container');
		this.parent.appendChild(this.errorContainer);
	}

	/** Проверяем, есть ли у контрола ошибки - если есть, возвращаем первую ошибку (ключ) */
	private getFirstError(): string {
		const errors = Object.keys(this.ngControl.errors);
		if (!errors || !errors.length) {
			return null;
		}
		return errors[0];
	}

	/**
	 * Так как в метод может прилететь null, то сначала проверяем на это.
	 * В таком случае нужно удалить сообщение из error-container
	 */
	private displayMessage(key: string) {
		if (!key) {
			this.removeMessage();
			return;
		}
		this.errorContainer.innerText = key;
	}

	private removeMessage() {
		if (this.isPreviouslyValid) {
			return; // если контрол и так был валидный, то еще раз удалять сообщение не нужно
		}
		this.errorContainer.innerText = '';
		this.isPreviouslyValid = true;
	}
}
