import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ChuckComponent } from './chuck/chuck.component';
import { Routes, RouterModule } from '@angular/router';
import { ChuckApiModule } from '../chuck-api';
import { PipesModule } from 'src/pipes';
import { DirectivesModule } from 'src/directives';
import { CardComponent } from './shared/components/card/card.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'chuck',
		component: ChuckComponent
	}
];

@NgModule({
	declarations: [MainComponent, ChuckComponent, CardComponent],
	imports: [
		CommonModule,
		ChuckApiModule,
		RouterModule.forChild(routes),
		PipesModule,
		DirectivesModule
	]
})
export class PagesModule {}
