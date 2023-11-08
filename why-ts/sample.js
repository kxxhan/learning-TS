// function sum(a, b) {
//     return a + b;
// }

// sum(10, '20'); // Will return '1020'

// 자바스크립트를 타입스크립트처럼 코딩하는 방법

// @ts-check
/**
 * 
 * @param {number} a first number 
 * @param {number} b second number
 */
function sum(a, b) {
    return a + b;
}

sum(10, 20);
// sum(10, "20"); ts-check에 의해 Error Occur