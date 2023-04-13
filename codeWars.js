// function twoSum(numbers, target) {
// let out = [];
// for(let i = 0; i < numbers.length; i++) {
//     for (let j = i+1; j < numbers.length; j++) {
//         if(numbers[i] + numbers[j] === target) {
//             return [i, j]
//         }
//     }
// }


    
// }

// console.log(twoSum([1, 2, 3], 4)) // returns [0, 2] or [2, 0]
// console.log(twoSum([2, 3, 1], 4)) // 
// console.log(twoSum([1234,5678,9012], 14690))
// console.log(twoSum([2, 2, 3], 4))

// function sum (num) {
//     //if (num[0] < 0) return 0
//     let out = 0
//     for (let i = 0; i < num.length; i++) {
//         out += num[i]
//         console.log(out)
//     }

//     return out
      
      
//   };

// console.log(sum([1, 5.2, 4, 0, -1]))

// //   Input: [1, 5.2, 4, 0, -1]
// //   Output: 9.2


// function order(words) {
//     let wordsArr = words.split(" ");
//     return words === "" ? "" : wordsArr.sort((a, b) => a.match(/\d/g) - b.match(/\d/g)).join(" ");
    

// }
// console.log(order("is2 Thi1s T4est 3a"))
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))


// // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// // ""  -->  ""

// function getSum(a, b) {
// let sum = 0;
// if (a === b) {
//     return a;
// } else if (a > b) {
//     for( let i = b; i <= a; i++) {
//         sum += i
//     }
//     return sum
// } else if (a < b) {
//     for (let i = a; i <= b; i++) {
//         sum += i
//     }return sum
// }
// return sum
// }

// console.log(getSum(284, 509))

// function periodIsLate(last, today, cycleLength) {
// const out = (today - last)/24/3600/1000
//     return out > cycleLength
// }


// console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35))



// //Isograms

// function isIsogram(str){
//     let lowerCased = str.toLowerCase();
//     for(let i = 0; i < str.length; i++) {
//         for(let j = i+1; j  < str.length; j++) {
//             if(lowerCased[i] === lowerCased[j]) {
               
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("moose"))
// console.log(isIsogram("isogram"))

//Categorize New Member
// function openOrSenior(data){
//     let out = [];
//     for  (let i = 0; i < data.length; i++) {
//         if(data[i][0] >= 55 && data[i][1] > 7) {
//             out.push("Senior")
//         } else {
//             out.push("Open")
//         }
        
//     }
//     return out
// }
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


//Sort Numbers
// function solution(nums){
    
    
//     if (nums === null) {
//         return []
//     }
    
//     return nums.sort((a, b) => a - b)
// }

// console.log(solution([1, 2, 10, 50, 5])); 
// console.log(solution(null)); 
//Anagram Detection
// var isAnagram = function(test, original) {
 
//    let str1 = test.toLowerCase().split('').sort().join("");
//    let str2 = original.toLowerCase().split('').sort().join("");
   
//     return str1 === str2
// };
// console.log(isAnagram("dumble", "bumble"))
// console.log(isAnagram("foefet", "toffee"))
// console.log(isAnagram("Buckethead", "DeathCubeK"))
// console.log(isAnagram("ound", "round"))
// console.log(isAnagram("AkYHDCDUFtdSeZOFj", "ZFAUjYkHStdCOeDFM"))
// console.log("ZFAUjYkHStdCOeDFM".split("").sort().join(""))
// console.log("AkYHDCDUFtdSeZOFj".split("").sort().join(""))

//Regex validate PIN code
// function validatePIN (pin) {
   
//     return /^(\d{4}|\d{6})$/.test(pin);
// }
// console.log(validatePIN("-1.234"))
//Double value every next call
// class Class {
//     static value = 0.5;
//     static getNumber() {
//       this.value = this.value*2
//       return this.value;
//     }
// }
// console.log(Class.getNumber())
// console.log(Class.getNumber())
// console.log(Class.getNumber())
// console.log(Class.getNumber())
// console.log(Class.getNumber())
// console.log(Class.getNumber())


//Kooka-Counter
// var kookaCounter = function(laughing) {
//     if(laughing.length === 0) {
//         return 0
//     }
//     let replaced = laughing.replace(/a/g, '')
//     let out = 0
    
//     for(let i = 0; i < replaced.length; i++) {
//       if(replaced[i] !== replaced[i+1]){
//         out +=1 
       
//       }
//     }
//     return out
// }
// console.log(kookaCounter("HahaHahaHa"))
// console.log(kookaCounter("hahahahaha"))
// console.log(kookaCounter("HaHaHahahaHaHa"))

// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3
//Even or Odd
// function evenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd"
// }

// console.log(evenOrOdd(5))


//Unique In Order

// var uniqueInOrder=function(iterable){
//     let res = [];
//     for (let i = 0; i < iterable.length; i++) {
//       if(iterable[i] !== iterable[i+1]) {
//         res.push(iterable[i])
//         console.log(res)
//       }
//     }
//     return res
//   }


// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder('ABBCcAD'))
// console.log(uniqueInOrder([1,2,2,3,3]))

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//Persistent Bugger
// function persistence(num) {
//   let i = 0;
//   while (num.toString().length !== 1) {
//     num = num.toString().split("").reduce((a,b)=>a*b);
//     i++;
//   }
//   return i;

// }
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
// console.log(persistence(39))
// console.log(persistence(999))
// console.log(persistence(4))
//Rock Paper Scissors
// const rps = (p1, p2) => {
//     const r = "rock";
//     const sc = "scissors";
//     const pap = "paper"
//     if(p1 === p2) {
//         return "Draw!"
//     } else {
//         if(p1 === r && p2 === sc || p1 === sc && p2 === pap || p1 === pap && p2=== r){

//             return "Player 1 won!"
//         }
//         if(p1=== sc && p2===r || p1===pap && p2===sc ||p1===r && p2 ===pap) {
//             return "Player 2 won!"
//         }
//     }
// };
// console.log(rps("scissors", "paper"))
// console.log(rps("scissors", "rock"))
// console.log(rps("paper", "paper"))

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
//String ends with? 
// function solution(str, ending) {
//     let index = str.length - ending.length
//     const out = str.slice(index)
    
//     return out === ending
// }

// // solution('abc', 'bc') // returns true
// // solution('abc', 'd') // returns false
// console.log(solution('abc', 'bc'))
// console.log(solution('abc', 'd'))
// console.log(solution('abcde', 'cde'))
// console.log(solution('abcde', 'abc'))

//Vowel remover

// function shortcut (string) {
//     return string.replace(/[aeiou]/g, "")
    
// }
// console.log(shortcut("hello"))
// console.log(shortcut("codewars"))
// console.log(shortcut("goodbye"))
// console.log(shortcut("HELLO"))


//   "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"


//Sum of two lowest positive integers
// function sumTwoSmallestNumbers(numbers) {  
//     let sorted = numbers.sort((a, b) => a-b)
//     console.log(sorted)
//     return sorted[0] + sorted[1]
    
// }

// console.log((sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])))
//[10, 343445353, 3453445, 3453545353453] should return 3453455

//Calculate average
// function findAverage(array) {
//     if(array.length === 0) {
//         return 0
//     } else {
//         let summ = 0
//         for(let el in array) {
//             summ += array[el]
//         }
//         return summ/array.length;
//     }
// }
//   console.log(findAverage([1, 2, 3, 4]))

//Sum Mixed Array
// function sumMix(x){
//     let arr = [];
//     let out = 0;
//     for (let el in x) {
//         arr.push(Number(x[el]))
        
//         out += arr[el]
        
//     }
//     return out;
// }
// console.log(sumMix([9, 3, '7', '3']))
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))

//Mispelled word
// var mispelled = function(word1, word2) {
//     let counter = 0;
    
//         for (let i = 0; i < word1.length; i++) {
//             if(!word1.includes(word2[i])) {
//                 console.log(word1, word2)
                
//                 counter+=1
//             }
//         }
    
//     console.log(counter)
//    return counter === 1 || word1 === word2 ? true : false
// }

// console.log(mispelled('versed', 'xersed'))
// console.log(mispelled('versed', 'v5rsed'))
//console.log(mispelled('versed', 'xersed'))
//console.log(mispelled('1versed', 'versed'))
//console.log(mispelled('versed', 'versed1'))
//console.log(mispelled('aaversed', 'versed'))
//console.log(mispelled('versed', 'applb'))
//console.log(mispelled('hulking', 'hulkiXg'))
//console.log(mispelled('disappear', 'pipe'))
//console.log(mispelled('nutty', 'grate'))

//Sum of positive
// function positiveSum(arr) {
//   let res = 0;
//   for(let i in arr) {
//     if(arr[i] > 0) {
//         res += arr[i]
//     }
//   }
//   return res
// }
// console.log(positiveSum([-1,2,-3,4,-5]))
//Calculate BMI
// function bmi(weight, height) {
//   let out = weight/(height*height);
//   let out2 = out.toFixed(2)
//   console.log(out2)
//   if (out2 <= 18.5) return "Underweight";
//   if (out2 <= 25.0) return "Normal";
//   if (out2 <= 30.0) return "Overweight";
//   if (out2 > 30) return "Obese";
  
  
    
//   }
//   console.log(bmi(80, 1.80))

//Find the capitals
// var capitals = function (word) {
// 	let outArr = [];
//     const reg = /[A-Z]/
    
//     for(let i in word) {
//         if(reg.test(word[i])) {
//             outArr.push(word.indexOf(word[i]))
//             console.log(outArr)
//         }
//     }
//     return outArr
// };
// console.log(capitals('CodEWaRs'))
//Descending Order
// function descendingOrder(n){
   
//     const out = String(n).split("").sort((a,b) =>a - b).reverse().join("");
    
//     return Number(out)
// }
// console.log(descendingOrder(123456789))
// console.log(descendingOrder(3564))
// console.log(descendingOrder(1021))

//Sum of a sequence
// const sequenceSum = (begin, end, step) => {
//     let out = 0
//     for(let i = begin; i<=end; i+=step) {
//         out +=i
//     }
//     return out
// };
// console.log(sequenceSum(2, 2, 2))
// console.log(sequenceSum(2, 6, 2))
// console.log(sequenceSum(1, 5, 1))
// console.log(sequenceSum(1, 5, 3))

//   2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

//Shortest Word
// function findShort(s){
//     let splited = s.split(" ").map(a => a.length).sort((a, b) => a - b)
//     return splited[0]

// }
// console.log((findShort("bitcoin take over the world maybe who knows perhaps")))
// console.log((findShort("ProofOfStake Classic Dash ProofOfWork DarkCoin Waves Mine Dogecoin Ethereum")))
//Decreasing Inputs
// function add() {
//     let args = arguments
//     let out = 0
//     for(let num in args) {
//         let index = +num+1;
//         out += args[num]/index
//         console.log(out)
//     }
    
//     return Math.round(out)

//   }
//   console.log(add(3,4,6)); 
//   console.log(add(100, 200, 300)); 
//   console.log(add(4, -3, -2)); 
//   console.log(add(-1, -2, -3, -4)); 
  /*
  returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
  */

  //Remove anchor from URL
  //const removeUrlAnchor = (url) => url.includes("#") ? url.slice(0, url.indexOf("#")) : url
  // function removeUrlAnchor(url){
  //   return url.split('#')[0];
  // }

//   "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
// console.log(removeUrlAnchor('www.codewars.com#about'))
// console.log(removeUrlAnchor("www.codewars.com?page=1"))

//Break camelCase
// function solution(string) {
//     let out = ''
//     for(let i = 0; i < string.length; i++) {
//      if(string[i] === string[i].toUpperCase()) {
//       out += " ";
//       out += string[i];
      
//      } else {
//       out += string[i]
      
//      }
//     }
    
//     return out
// }
//console.log(solution("camelCasing"))
//console.log(solution("identifier"))
//console.log(solution('camelCasingTest'))
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//rot13
// const rot13 = (message) => {
//   const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
// }
//  console.log(rot13("Privet")) 
  //cevirg

  //Who likes it?
//   function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }
// console.log(likes(["Peter"]))
//   []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//Detect Pangram
// function isPangram(string){
//   const originalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const upCased = string.toUpperCase().replace(/[^A-Z]/g, "")
  
//   let arr = []
//   for(let el in upCased) {
//     if(!arr.includes(upCased[el])) {
//       arr.push(upCased[el])
      
//     }
//   }
  
    
//     return arr.length === originalAlpha.length
  
// }
//console.log(isPangram("The quick brown fox jumps over the lazy dog."))
//console.log(isPangram("This is not a pangram."))
//console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'))

//Digit*Digit

// function squareDigits(num){
//   let out = ''
//   String(num).split("").forEach(el => out += el*el)
//   return +out
// }
// console.log(squareDigits(2112))

//Array.diff
// function arrayDiff(a, b) {
//   let arr = []
//   for(let i = 0; i < a.length; i++) {
//     if(!b.includes(a[i])) {
      
//       arr.push(a[i])
//     }
    
//   }
//   return arr
// }

// console.log(arrayDiff([1,2], [1]))
// console.log(arrayDiff([1,2], [2]))
// console.log(arrayDiff([1,2,2], [1]))
// console.log(arrayDiff([1,2,2], [2]))
// console.log(arrayDiff([], [1,2]))
// console.log(arrayDiff([1,2,2], []))

//Replace With Alphabet Position
// function alphabetPosition(text) {
//   const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const arr = []
//   let splited = text.replace(/[^a-z]/gi, "").toUpperCase().split("")
  
//   for(let el in splited) {
//     arr.push(alpha.indexOf(splited[el]) + 1)
//   }
  
//   return arr.join(" ");
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//Extract the domain name from a URL
// function domainName(url){
//   url = url.replace("www.", "")
//   url = url.replace("http://", "")
//   url = url.replace("https://", "")
//   return url = url.split(".")[0]
// }
// console.log(domainName("http://google.com"))
// console.log(domainName("www.xakep.ru"))
// console.log(domainName("https://youtube.com"))
// console.log(domainName("http://google.co.jp"))
// console.log(domainName("http://github.com/carbonfive/raygun"))
// console.log(domainName("http://www.zombie-bites.com" ))

//Calculating with Functions
// const zero = (operation) => !operation ? 0 : operation(0);
// const one = (operation) => !operation ? 1 : operation(1);
// const two = (operation) => !operation ? 2 : operation(2);
// const three = (operation) => !operation ? 3 : operation(3);
// const four = (operation) => !operation ? 4 : operation(4);
// const five = (operation) => !operation ? 5 : operation(5);
// const six = (operation) => !operation ? 6 : operation(6);
// const seven = (operation) => !operation ? 7 : operation(7);
// const eight = (operation) => !operation ? 8 : operation(8);
// const nine = (operation) => !operation ? 9 : operation(9);

// const plus = (number) => (other_number) => other_number + number;
// const minus = (number) => (other_number) => other_number - number;
// const times = (number) => (other_number) => other_number * number;
// const dividedBy = (number) => (other_number) => Math.floor(other_number / number);

// console.log(eight(dividedBy(three())))
//String incrementer
// function incrementString(str) {
//   const body = str.slice(0, -1);
//   console.log(body)
//   const lastDigit = str.slice(-1).match(/[0-9]/);
//   return lastDigit === null
//     ? str + "1"
//     : lastDigit != 9
//     ? body + (+lastDigit + 1)
//     : incrementString(body) + "0";
// }
// console.log(incrementString("00009"))

//Count of positives / sum of negatives
// function countPositivesSumNegatives(input) {
//   let out = []
//   let count = 0
//   let sumNeg = 0
//   for(let el in input) {
//     if (input[el]>0) {
//       count++
//       console.log(count)
//     } else{
//       sumNeg += input[el]
//     }
//   }
//   return input === null || !input.length ? [] : [count, sumNeg]
  
// }
// console.log(countPositivesSumNegatives([+0,+0]))
//Correct the mistakes of the character recognition software

// function correct(string)
// {
// 	string = string.replace(/0/g, "O")
// 	string = string.replace(/1/g, "I")
// 	string = string.replace(/5/g, "S")
//   return string
// }
// console.log((correct("L0ND0N")))


//Mexican Wave
// function wave(str){
//   let waveArr = [];
//   for(let i = 0; i < str.length; i++) {
//     let letter = str[i];
    
//     if (letter === " ") {
       
//       continue;
     
//     } else {
//       waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
//       console.log(waveArr)
//     } 
//   }
//   return waveArr;
// }
// console.log(wave("hello"))
// console.log(wave("codewars"))
// console.log(wave(""))
// console.log(wave("two words"))
// console.log(wave(" gap "))

//Grasshopper - Grade book
// function getGrade (s1, s2, s3) {
//   let score = (s1 + s2 + s3) / 3
//   if (score < 60) {
//     return "F"
//   } else if(score < 70) {
//     return "D"
//   } else if(score < 80) {
//     return "C"
//   } else if(score < 90) {
//     return "B"
//   } else {return "A"}
// }
// console.log(getGrade(95,90,93))
// console.log(getGrade(58,59,60))

//Transportation on vacation
// function rentalCarCost(d) {
//   let perDay = 40;
//   let out = 0
//   if(d >= 7) {
//     out = d * perDay - 50;
//     return out;
//   } else if (d >= 3) {
//     out = d * perDay - 20
//     return out
//   } else {
//     out = d * perDay
//     return out
//   }
// }
// console.log(rentalCarCost(10))

//Small enough? - Beginner
// function smallEnough(a, limit){
//   for(let el of a) {
//     if(limit < el) {
//       console.log(el)
//       return false
//     }
//   }
//   return true
// }
// console.log(smallEnough([66, 101], 200))
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))

//Reversing Words in a String
// function reverse(string){
//   return string.split(" ").reverse().join(" ")
  
// }
// console.log(reverse('no one cares'))

///Make a function that does arithmetic!
// function arithmetic(a, b, operator){
//  const option = {
//   "add": function(a,b){return a+b},
//   "subtract": function(a,b){return a-b},
//   "multiply": function(a,b){return a*b},
//   "divide": function(a,b){return a/b},
//  }
//  return option[operator](a,b)
// }

// console.log(arithmetic(1, 2, "add"))

//Simple Fun #176: Reverse Letter
// function reverseLetter(str) {
//   str = str.replace(/[^a-z]/g, "");
//   return str.split("").reverse().join("")
  
  
// }
// console.log(reverseLetter("ultr53o?n"))
// console.log(reverseLetter("krishan"))
//
//Vowel Count
// function getCount(str) {
//   str = str.replace(/[^aeiou]/g, "")
  
//   return str.length;
// }
// console.log(getCount("abracadabra"))

//Sum The Strings
// function sumStr(a,b) {
//   let str = Number(a) + Number(b)
//   return str.toString()
// }