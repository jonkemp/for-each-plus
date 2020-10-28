/* global forEach */
const { assert } = chai;

mocha.setup('bdd');
mocha.checkLeaks();

describe('forEach', () => {
	it('each iterators provide value and iteration count', () => {
		forEach([1, 2, 3], (num, i) => {
			assert.strictEqual(num, i + 1);
		});
	});

	it('context object property accessed', () => {
		const answers = [];

		forEach([1, 2, 3], function(num){ answers.push(num * this.multiplier); }, {multiplier: 5});
		assert.deepEqual(answers, [5, 10, 15]);
	});

	it('can iterate a simple array', () => {
		const answers = [];

		forEach([1, 2, 3], num => { answers.push(num); });
		assert.deepEqual(answers, [1, 2, 3]);
	});

	it('iterating over objects works, and ignores the object prototype', () => {
		const answers = [];
		const obj = {one: 1, two: 2, three: 3};

		obj.constructor.prototype.four = 4;
		forEach(obj, (value, key) => { answers.push(key); });
		assert.deepEqual(answers, ['one', 'two', 'three']);
		delete obj.constructor.prototype.four;
	});

	it('the function should be called only 3 times', () => {
		let count = 0;
		const obj = {1: 'foo', 2: 'bar', 3: 'baz'};

		forEach(obj, () => { count++; });
		assert.strictEqual(count, 3);
	});

	it('handles a null properly', () => {
		let answers = 0;

		forEach(null, () => { ++answers; });
		assert.strictEqual(answers, 0);

		forEach(false, () => {});

		const a = [1, 2, 3];

		assert.strictEqual(forEach(a, () => {}), a);
		assert.strictEqual(forEach(null, () => {}), null);
	});
});
