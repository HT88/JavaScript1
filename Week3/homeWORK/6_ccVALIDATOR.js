'use strict'

//I decided not to reinvent the wheel. I have introduced only minor chagnes to the code we developed during our sesson, in parts where I had dissifulties understing the code.  

function validateAllChsAreNumbers(number) {
        let inputNumber = number;
        let isNumber = /^\d+$/.test(inputNumber);
        
        if (isNumber === true) {
            return 'PASS';
        } else {
            return 'FAIL';
        };
    }
    
function validateDifferentElements(number) {
        var occurences = {};
        for(let i = 0; i < number.length; i++) {
          occurences[number[i]] = undefined;
        }
        var uniqueValues = Object.keys(occurences);
        return uniqueValues.length > 1;
      }
    
function validateSumIsLargerThan16(number) {
        var sum = 0;
        for(let i = 0; i < number.length; i++) {
          sum = sum + Number.parseInt(number[i]);
        }
        return sum > 16;
      }

function isEven(number) {
        return number % 2 === 0;
      }

function validateCreditNumber(number) {
        // Validations
        if (number.length !== 16) {
          return false;
        }
        // all characters must be numbers
        if (! validateAllChsAreNumbers(number)) {
          return false;
        }
        // at least two different elements
        if (! validateDifferentElements(number)) {
          return false;
        }
        // sum of all the numbers must be greater than 16
        if (! validateSumIsLargerThan16(number)) {
          return false;
        }
        // last digit must be even
        if (! isEven(number[number.length - 1])) {
          return false;
        }
        return true;
      }

      
// POSITIVE TESTS - SHOULD TRUE
// The following credit card numbers are invalid:
var result = validateCreditNumber('9999777788880000') ? 'pass' : 'fail';
console.log(`TEST 1: ${result}`, )
var result = validateCreditNumber('6666666666661666') ? 'pass' : 'fail';
console.log(`TEST 2: ${result}`, )
// NEGATIVE TESTS - SHOULD FALSE
// a92332119c011112 (invalid characters)
var result = !validateCreditNumber('a92332119c011112') ? 'pass' : 'fail';
console.log(`TEST 3: ${result}`, )
// 4444444444444444 (only one type of number)
var result = validateCreditNumber('4444444444444444') ? 'pass' : 'fail';
console.log(`TEST 4: ${result}`, )
// 1111111111111110 (sum less than 16)
var result = validateCreditNumber('1111111111111110') ? 'pass' : 'fail';
console.log(`TEST 5: ${result}`, )
// 6666666666666661 (odd final number)
var result = validateCreditNumber('6666666666666661') ? 'pass' : 'fail';
console.log(`TEST 6: ${result}`, )