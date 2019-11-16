import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-registration-view',
	templateUrl: './registration-view.component.html',
	styleUrls: ['./registration-view.component.less']
})
export class RegistrationViewComponent implements OnInit {
	constructor(private router: Router) {
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe((event: NavigationEnd) => {
				// const segment = event.url
				// 	.match(/(\/\w+)*/)
				// 	.pop()
				// 	.match(/\w+/)
				// 	.pop();
				// this.title = this.titles[segment];
			});
	}
	public title: string;
	public titles = {
		step1: 'Account data',
		step2: 'Personal data'
	};

	ngOnInit() {}
}
