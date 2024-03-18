class GlobalStore {
	constructor() {
		this.testVariable2 = 'It Lives!';
	}

	testVariable1 = 'hello world!';

	testVariable2: string;
}

export default new GlobalStore();
