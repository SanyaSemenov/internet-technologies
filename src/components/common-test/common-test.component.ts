import { Component } from '@angular/core';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.less']
})
export class CommonTestComponent {
	public isGreen: boolean = false;
	public isGreen2: boolean = this.isGreen;

	public toogleGreen() {
		this.isGreen = !this.isGreen;
	}
}
