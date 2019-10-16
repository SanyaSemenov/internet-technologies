import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChuckApiService {
	constructor(private http$: HttpClient) {}

	public getJoke() {
		return this.http$.get('https://api.chucknorris.io/jokes/random');
	}
}
