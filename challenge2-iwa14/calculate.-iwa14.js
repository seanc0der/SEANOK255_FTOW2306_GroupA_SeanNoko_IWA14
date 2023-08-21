const add = (a, b) => a + b;

const multiply = (sum, c) => sum * c;

const internal = function () {
	const sum = this.add(this.internal.a, this.internal.b);
	const product = this.multiply(sum, this.internal.c);
	console.log(product);
};

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
	calculate: internal,
};

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
	calculate: internal,
};

example1.calculate();
example2.calculate();
