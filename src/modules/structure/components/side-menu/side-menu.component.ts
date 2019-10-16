import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models';

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit {
	constructor() {}

	public menu: MenuItem[] = [
		{
			text: 'Blank',
			routerLink: ''
		},
		{
			icon: '/assets/chuck-norris.png',
			text: 'Chuck Norris',
			routerLink: '/chuck'
		}
	];

	ngOnInit() {}
}
