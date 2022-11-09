import { findMult } from './../src/js/scripts.js';
import { findFibonacciEvens } from './../src/js/scripts.js';
import { largestPrimeFactor } from './../src/js/scripts.js';

describe('findMult', () => {
	test('should find sum of multiples to a specified limit', () => {
		expect(findMult(1000)(3)(5)).toEqual(233168)
	})
})

describe('findFibonacciEvens', () => {
	test('Problem 2:  should find sum of even-valued fibonacci nums to a specified limit', () => {
		expect(findFibonacciEvens(4000000)(2)).toEqual(4613730);
	})
})

describe('largestPrimeFactor', () => {
	test('should find largest prime factor', () => {
		expect(largestPrimeFactor(600851475143)).toEqual();
	})
})