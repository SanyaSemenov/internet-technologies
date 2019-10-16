import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ChuckComponent } from './chuck/chuck.component';
import { Routes, RouterModule } from '@angular/router';
import { ChuckApiModule } from '../chuck-api';

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
	declarations: [MainComponent, ChuckComponent],
	imports: [CommonModule, ChuckApiModule, RouterModule.forChild(routes)]
})
export class PagesModule {}
