import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StructureModule } from 'src/modules';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: '../modules/pages/pages.module#PagesModule'
	}
];

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		StructureModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
