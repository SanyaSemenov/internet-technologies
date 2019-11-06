import { Component, OnInit } from '@angular/core';
import { CounterStorage } from '../../models/counter-storage';
import { CardInfo } from '../../models/card-info';
import { CardStorage } from '../../models/card-storage';

@Component({
	selector: 'card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
	constructor() {}

	public infoStorage = new CardStorage();
	public counterStorage = new CounterStorage();
	public counter: number;

	ngOnInit() {
		if (!this.counter) {
			this.counter = 0;
		}
		this.counter++;
		if (this.infoStorage.info) {
			return;
		}
		this.infoStorage.info = {
			title: 'Shiba',
			text: 'Good boy',
			left: 'back',
			right: 'next'
		};
	}
}
