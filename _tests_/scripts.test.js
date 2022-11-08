import { findMult } from './../src/js/scripts.js';

describe('findMult', () => {
	test('should find sum of multiples to a specified limit', () => {
		expect(findMult(1000)(3)(5)).toEqual(233168)
	})
})