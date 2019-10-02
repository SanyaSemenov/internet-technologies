import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructureModule } from 'src/modules';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, StructureModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
