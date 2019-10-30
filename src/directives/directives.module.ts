import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderlineDirective } from './underline/underline.directive';

@NgModule({
	declarations: [UnderlineDirective],
	exports: [UnderlineDirective],
	imports: [CommonModule]
})
export class DirectivesModule {}
