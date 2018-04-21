const counter = (function() {
	var amount = 0;
	return {
		getCurrent() {
			return amount;
		},
		increment() {
			return ++amount;
		}
	};
})();

export default counter;
