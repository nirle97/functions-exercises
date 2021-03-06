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
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
      str[i] =  str[i][0].toUpperCase() + str[i].slice(1, str[i].length); 
  }
  str = str.join(" ");
  return str;
}

//Question 4
function myPower(x, n) {
  x = Number(x);
  n = Number(n);
  return x**n;
}

//Question 5
function getFirstNotRepeating(str) {
  str = str.split("");
  const afterFilter = str.filter((item, index) => str.indexOf(item) !== index);
  let result = '';
  for (char of str) {
      if (!(afterFilter.includes(char))) {
          result += char;
          break;
      }
  }
  return result;
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
