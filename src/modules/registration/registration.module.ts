import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	RegistrationViewComponent,
	RegistrationStep1Component,
	RegistrationStep2Component
} from './components';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/directives';

const routes: Routes = [
	{
		path: '',
		component: RegistrationViewComponent,
		children: [
			{
				path: '',
				component: RegistrationStep1Component
			},
			{
				path: 'step1',
				component: RegistrationStep1Component
			},
			{
				path: 'step2',
				component: RegistrationStep2Component
			}
		]
	}
];

@NgModule({
	declarations: [
		RegistrationViewComponent,
		RegistrationStep1Component,
		RegistrationStep2Component
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		DirectivesModule
	]
})
export class RegistrationModule {}
