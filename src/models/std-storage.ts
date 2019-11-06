export class StdStorage<T> {
	constructor(
		key: string,
		converter: (value: T) => string,
		parser: (value: string) => T | string,
		storage: IStorage
	) {
		this.key = key;
		this.converter = converter;
		this.parser = parser;
		this.storage = storage;
	}

	private key: string;
	private converter: (value: T) => string;
	private parser: (value: string) => T | string;
	private storage: IStorage;

	getValue(): T | string {
		return this.parser(this.storage.getItem(this.key));
	}

	setValue(value: T) {
		this.storage.setItem(this.key, this.converter(value));
	}
}

interface IStorage {
	getItem(key: string);
	setItem(key: string, value: any);
}
