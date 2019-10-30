import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { AmountPipe } from './amount/amount.pipe';

@NgModule({
	declarations: [AmountPipe],
	exports: [AmountPipe],
	imports: [CommonModule],
	providers: [DecimalPipe]
})
export class PipesModule {}
