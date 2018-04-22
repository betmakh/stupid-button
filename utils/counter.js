import bigInt from 'big-integer';

const URL = 'http://192.168.1.97:3000/click';
const TIMER_INTERVAL = 3000;

var amount = bigInt(0);

const counter = {
	init() {
		this.localClickCount = 0;
		return this.updateValue().then(value => {
			if (value.length) {
				this._timer = setInterval(() => {
					this.updateValue();
				}, TIMER_INTERVAL);
			}
			return amount.toString();
		});
	},
	updateValue() {
		let request = fetch(URL, {
			method: 'POST',
			body: this.localClickCount.toString() || '0'
		})
			.then(response => {
				if (response.ok) {
					this.localClickCount = 0;
					return response.text();
				} else {
					return '';
				}
			})
			.catch(error => {
				console.error('errr', error);
			});
		request.then(value => {
			if (value) {
				amount = bigInt(value).plus(this.localClickCount);
			}
		});
		return request;
	},
	getCurrent() {
		return amount.toString();
	},
	increment() {
		this.localClickCount++;
		amount = amount.plus(1);
		return amount.toString();
	}
};

export default counter;
