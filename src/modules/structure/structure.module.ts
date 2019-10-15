import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';

const components = [HeaderComponent, SideMenuComponent, SideMenuItemComponent];

@NgModule({
	declarations: components,
	exports: components,
	imports: [CommonModule]
})
export class StructureModule {}
