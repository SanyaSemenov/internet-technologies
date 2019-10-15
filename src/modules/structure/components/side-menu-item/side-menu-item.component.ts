import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'side-menu-item',
	templateUrl: './side-menu-item.component.html',
	styleUrls: ['./side-menu-item.component.less']
})
export class SideMenuItemComponent implements OnInit {
	constructor() {}

	@Input() public icon: string;

	ngOnInit() {}
}
