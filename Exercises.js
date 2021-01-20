//Question 1
function myReverse(str) {
  str = String(str);
  str = str.split(''); 
  result = [];
  for (let i = str.length - 1; i >= 0; i--) {
      result.push(str[i]);
  }
  result = result.join('');
  return result;
}
//Question 2
function allCombinations(str) {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let n = i; n <= str.length; n++) {
        if (n !== i) {
          combinations.push(str.slice(i, n));
        }
    }
  }
  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  return "";
}

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
