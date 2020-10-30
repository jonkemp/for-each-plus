var isObject = obj => {
	const type = typeof obj;

	return type === 'function' || type === 'object' && !!obj;
};

var getKeys = (obj) => {
	if (!isObject(obj)) return [];

	return Object.keys(obj);
};

var shallowProperty = key => obj => obj == null ? void 0 : obj[key];

var getLength = shallowProperty('length');

var isArrayLike = (collection) => {
	const length = getLength(collection);

	return typeof length == 'number' && length >= 0 && length <= Number.MAX_SAFE_INTEGER;
};

var optimizeCb = (func, context, argCount) => {
	if (context === void 0) return func;
	switch (argCount == null ? 3 : argCount) {
		case 1: return value => func.call(context, value);
			// The 2-argument case is omitted because we’re not using it.
		case 3: return (value, index, collection) => func.call(context, value, index, collection);
		case 4: return (accumulator, value, index, collection) => func.call(context, accumulator, value, index, collection);
	}

	return (...args) => func.apply(context, args);
};

var forEach = (obj, iteratee, context) => {
	iteratee = optimizeCb(iteratee, context);
	if (isArrayLike(obj)) {
		let i = 0;

		for (const item of obj) {
			iteratee(item, i++, obj);
		}
	} else {
		const keys = getKeys(obj);

		for (const key of keys) {
			iteratee(obj[key], key, obj);
		}
	}

	return obj;
};

module.exports = forEach;
