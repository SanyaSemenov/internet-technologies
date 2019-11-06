import { StdStorage } from '@models';
import { CardInfo } from './card-info';

const converter = (value: CardInfo) => {
	return JSON.stringify(value);
};

const parser = (value: string) => {
	if (!value) {
		return null;
	}
	return JSON.parse(value);
};

export class CardStorage extends StdStorage<CardInfo> {
	constructor() {
		super('STD_CARD', converter, parser, localStorage);
	}

	private _info: CardInfo;

	public get info(): CardInfo {
		return this._info || this.getValue() as CardInfo;
	}

	public set info(value: CardInfo) {
		this._info = value;
		this.setValue(this._info);
	}
}
