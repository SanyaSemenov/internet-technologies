import { Component, OnInit } from '@angular/core';
import { ChuckApiService } from 'src/modules/chuck-api';

@Component({
	selector: 'app-chuck',
	templateUrl: './chuck.component.html',
	styleUrls: ['./chuck.component.less']
})
export class ChuckComponent implements OnInit {
	constructor(private chuckApi$: ChuckApiService) {}
	public joke: string;

	ngOnInit() {
		this.chuckApi$.getJoke()
			.subscribe((result: any) => {
				this.joke = result.value;
			}, (error: any) => console.log(error));
	}
}
