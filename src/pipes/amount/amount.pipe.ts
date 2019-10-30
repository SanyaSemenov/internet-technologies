import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
	name: 'amount'
})
export class AmountPipe implements PipeTransform {
	constructor(private decimalPipe: DecimalPipe) {}
	transform(value: number): any {
		return '$ ' + this.decimalPipe.transform(value, '0.2-2');
	}
}
