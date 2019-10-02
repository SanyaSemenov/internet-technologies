import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

const components = [HeaderComponent, SideMenuComponent];

@NgModule({
	declarations: components,
	exports: components,
	imports: [CommonModule]
})
export class StructureModule {}
