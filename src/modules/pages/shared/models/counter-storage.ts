import { StdStorage } from '@models';

const converter = (value: number) => {
	return value.toString();
};

const parser = (value: string) => {
	if (!value) {
		return 0;
	}
	return +value;
};

export class CounterStorage extends StdStorage<number> {
	constructor() {
		super('STD_COUNTER', converter, parser, localStorage);
	}

	private _counter: number;

	public get counter(): number {
		return this._counter || this.getValue() as number;
	}

	public set counter(value: number) {
		this._counter = value;
		this.setValue(this._counter);
	}
}
