const shallowProperty = key => obj => obj == null ? void 0 : obj[key];

const MAX_ARRAY_INDEX = 2 ** 53 - 1;
const getLength = shallowProperty('length');
const isArrayLike = (collection) => {
	const length = getLength(collection);

	return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

const isObject = obj => {
	const type = typeof obj;

	return type === 'function' || type === 'object' && !!obj;
};

const getKeys = (obj) => {
	if (!isObject(obj)) return [];

	return Object.keys(obj);
};

const optimizeCb = (func, context, argCount) => {
	if (context === void 0) return func;
	switch (argCount == null ? 3 : argCount) {
		case 1: return value => func.call(context, value);
			// The 2-argument case is omitted because we’re not using it.
		case 3: return (value, index, collection) => func.call(context, value, index, collection);
		case 4: return (accumulator, value, index, collection) => func.call(context, accumulator, value, index, collection);
	}

	return (...args) => func.apply(context, args);
};

module.exports = {
	isArrayLike,
	getKeys,
	optimizeCb
};
