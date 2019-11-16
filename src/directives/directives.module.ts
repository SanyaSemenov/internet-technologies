import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageDirective } from './validation-message/validation-message.directive';

@NgModule({
	declarations: [ValidationMessageDirective],
	exports: [ValidationMessageDirective],
	imports: [CommonModule]
})
export class DirectivesModule {}
