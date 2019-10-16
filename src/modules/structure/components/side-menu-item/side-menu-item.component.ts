import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'side-menu-item',
	templateUrl: './side-menu-item.component.html',
	styleUrls: ['./side-menu-item.component.less']
})
export class SideMenuItemComponent implements OnInit {
	constructor(private router: Router) {}

	@Input() public icon: string;
	@Input() public text: string;
	@Input() public routerLink: string;

	ngOnInit() {}

	public onClick() {
		this.router.navigate([this.routerLink]);
	}
}
