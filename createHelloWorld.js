// Copyright (c) 2023 by Chaitanya Shukla.
// leetcode.com 30 Days of JavaScript challenge



// ----- Started -----
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
/**
 * @return {Function}
 */
var createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    };
};

// --------------------------------

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
