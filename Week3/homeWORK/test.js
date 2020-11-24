
// const str = '9999777788880000';
// let isNumber = /^\d+$/.test(str);
// console.log(isNumber);


//https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

    
    function validateCard (cardNumber) {
        let inputNumber = cardNumber;
        let isNumber = /^\d+$/.test(inputNumber);
        
        if (isNumber === true) {
            return 'PASS';
        } else {
            return 'FAIL';
        };
    }

    console.log(validateCard('666666666AAAAA6666661'));

var result = validateCard('9999777788880000') ? 'pass' : 'fail';
console.log(`TEST 1: ${result}`, )

var result = validateCard ('6666666666661666') ? 'pass' : 'fail';
console.log(`TEST 2: ${result}`, )

  // NEGATIVE TESTS - SHOULD FALSE
  // a92332119c011112 (invalid characters)
  var result = !validateCard ('a92332119c011112') ? 'pass' : 'fail';
  console.log(`TEST 3: ${result}`, )

  // 4444444444444444 (only one type of number)
  var result = validateCard ('4444444444444444') ? 'pass' : 'fail';
  console.log(`TEST 4: ${result}`, )

  // 1111111111111110 (sum less than 16)
  var result = validateCard('1111111111111110') ? 'pass' : 'fail';
  console.log(`TEST 5: ${result}`, )

  // 6666666666666661 (odd final number)
  var result = !validateCard ('666666666AAAAA6666661') ? 'pass' : 'fail';
  console.log(`TEST 6: ${result}`, )