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
//Twice as old
// function twiceAsOld(dad, son) {
//   return Math.abs(dad - (son+son))
// }
// console.log(twiceAsOld(55, 30))

//Counting Duplicates
// function duplicateCount(text){
//   let arr = text.toUpperCase().split("")
//   let dublicates = arr.filter((el, i) => arr.indexOf(el) !== i)
//   let out = dublicates.filter((el, i) => dublicates.indexOf(el) === i)
  
//   return out.length
   
// }
// console.log(duplicateCount("Indivisibilities"))
// console.log(duplicateCount("aA11"))

//All Star Code Challenge #15
// function rotate(str){
// const out = []
// for(let i = 1; i < str.length; i++) {
//   out.push(str.slice(i)+str.slice(0, i)) 
// }
// out.push(str)  
// return str.length === 0 ? [] : out
// }
// console.log(rotate("Hello"))
// console.log(rotate(""))
 // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

 //Friend or Foe?
//  function friend(friends){
//   return friends.filter(el => el.length === 4)
// }
// console.log(friend(["Love", "Your", "Face", "1"]))
// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))

// Roman Numerals Decoder
// function solution (roman) {
//   const cur = {
//   "I": 1,
//   "V": 5,
//   "X": 10,
//   "L": 50,
//   "C": 100,
//   "D": 500,
//   "M": 1000
//   }
//   let rest
//   let out = 0;
//   for(let i = 0; i < roman.length; i++) {
//   if(cur[roman[i]] < cur[roman[i+1]]) {
//     rest = cur[roman[i]] 
//     out -= rest
//   } else {
//     out += cur[roman[i]]
//     }
    
//  }
//  	return out;
// }
// console.log(solution('MDCLXVI'))
// console.log(solution('IV'))
// console.log(solution('XXI'))
// console.log(solution('IX'))
// console.log(solution("MMMCDXIII"))

//Sort the odd
// function sortArray(arr) {
//   let oddNum = arr.filter(el => el%2!==0).sort((a,b) => a-b)
//   let evenNum = arr.filter(el => el%2===0)
//   let out = []
//   console.log(evenNum, oddNum)
//   for(let el in arr) {
//     if(arr[el] % 2 !== 0) {
//       out.push(oddNum.shift())
//       console.log(out)
//     } else {
//       out.push(evenNum.shift())
//       console.log(out)
//     }
//   }
//     return out
//   }

// console.log(sortArray([5, 3, 2, 8, 1, 4]))

// function isPalindrome(x) {
//   let a = x.toUpperCase().split("").join();
//   let b = x.toUpperCase().split("").reverse().join()
//   console.log(a, b)
//   return a === b
// }
// console.log(isPalindrome("maM"))

//Switch it Up!
// function switchItUp(number){
//   switch(number) {
//     case 0:
//       return "Zero"
//     case 1:
//       return "One"
//     case 2:
//       return "Two"
//     case 3:
//       return "Three"
//     case 4:
//       return "Four"
//     case 5:
//       return "Five"
//     case 6:
//       return "Six"
//     case 7:
//       return "Seven"
//     case 8:
//       return "Eight"
//     case 9:
//       return "Nine"
//   }
//   }
// console.log(switchItUp(9))

//Find the unique number
// function findUniq(arr) {
//   return arr = arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el))   
// }
// console.log(findUniq([ 3, 10, 3, 3, 3 ]))
// console.log(findUniq([1, +0, +0]))
// console.log(findUniq([ 1, 0, 0 ]))

//
//Compare Number
// const compare = (a, b) => {
//   if (a.includes(".") || b.includes(".")) { 
//       return +a > +b ? "greater" : +a < +b ? "less" : "equal";
//   }
// return BigInt(a) > BigInt(b) ? "greater" : BigInt(a) < BigInt(b) ? "less" : "equal";
// }
// console.log(compare("2","12"))
// console.log(compare("1000000000000000000000000000000000","1000000000000000000000000000000001"))
// console.log(compare("999","1000"))
// console.log(compare("999","-00000000000001000.00"))
// console.log(compare("999","1"))
// console.log(compare("-0123.09","123.08"))
// console.log(compare("875","799"))

//Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// function replace(s){
//   s = s.replace(/[aeiouAEIOU]/g, '!')
//   return s
// }
// console.log(replace("ABCDE"))

//Find Multiples of a Number
// function findMultiples(integer, limit) {
//   const out = []
//   const len = Math.floor(limit / integer);
  
//   for(let i = 1; i <= len; i++) {
//   out.push(integer*i)  
  
//   }
//   return out
// }
// console.log(findMultiples(11, 54))

//Two to One
// function longest(s1, s2) {
//   s1 = s1.split("").filter((el, i) => s1.indexOf(el) == i)
//   s2 = s2.split("").filter((el, i) => s2.indexOf(el) == i)
//   let out = s1 + s2
//   out = out.split("").filter((el, i) => out.indexOf(el) === i).sort().join("")
//   console.log(out)
//   return out.replace(",", "")
// }
// console.log(longest("aretheyhere", "yestheyarehere"))
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))

//Find the odd int
// function findOdd(arr) {
//   return arr.reduce((acc, item) => acc ^ item)
// }
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

//Keep the Order
// function keepOrder(arr, val) {
//   let i
//   for(i = 0; i < arr.length; i++) {
//     if(val <= arr[i]) {
//       console.log(arr[i])
//       break
//     }
//   }
//   return i
// }
// console.log(keepOrder([1, 2, 3, 4, 7], 5))
// console.log(keepOrder([1, 2, 3, 4, 7], 0))
// console.log(keepOrder([1, 1, 2, 2, 2], 2))
// console.log(keepOrder([-5, -4, -2, -1, 1, 2], -2))
// console.log(keepOrder([1, 2, 3, 4], 5))

// function unusualFive() {
//   let arr = [true, true, true, true, false]
//   return arr.length;
// }
// console.log(unusualFive())

//Odd or Even?
// function oddOrEven(array) {
//   if(array.length > 0) {
//     const sum = array.reduce((acc, el) => acc += el)
//   if(sum % 2 === 0) {
//     return "even"
//   }
//   if (sum % 2 !== 0) {
//     return "odd"
//   } 
//   }
  
//   return "even"
// }
// console.log(oddOrEven([1023, 1, 2]))
// console.log(oddOrEven([]))

//Area or Perimeter
// const areaOrPerimeter = function(l , w) {
//   if(l === w) {
//     return l*w
//   }
//   return l+l + w+w
// };

// console.log(areaOrPerimeter(3,  3))
// console.log(areaOrPerimeter(6,  10))

//Disemvowel Trolls
// function disemvowel(str) {
//   return str.replace(/[aeoui]/gi, "");
// }
// console.log(disemvowel("This website is for losers LOL!"))
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
// console.log(disemvowel("What are you, a communist?"))

//Give me a Diamond
// function diamond(n){
//   if (n < 0 || !(n % 2)) return null; 
//   const middleIndex = Math.floor(n / 2);
  
//   return Array.apply(null, {length: n})
//       .map((el, index) => {
//         const indentation = Math.abs(index - middleIndex);
//         const numberOfAsterisks = n - indentation * 2;
//         return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
//       })
//       .join('\n') + '\n';
// }
// console.log(diamond(5))
// console.log(diamond(1))
//Find Cracker.
//
//Merge two sorted arrays into one
// function mergeArrays(arr1, arr2) {
//   let out = []
// out = arr1.concat(arr2).sort((a,b) => a-b)
//   return arr1.length === 0 && arr2.length === 0 ? [] : out.filter((el , i) => out.indexOf(el) === i)
// }
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))

//Grasshopper - Check for factor
// function checkForFactor (base, factor) {
//   return base % factor === 0
//  }
//  console.log(checkForFactor(9,2))
//  console.log(checkForFactor(10,2))

// const twoSum = function(nums, target) {
//   const out = []
//   for(let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if(target === nums[i] + nums[j]) {
//         out.push(i, j)
//       }
//     }
//   }
//   return out
// };
// console.log(twoSum([2,7,11,15], 9))

// var isPalindrome = function(x) {
  
//   return x.toString().split("").reverse().join() === x.toString().split("").join()
  
// };
// console.log(isPalindrome(1))

//
//Mumbling
// function accum(s) {
//   s = s.toLowerCase()
// 	let out = ""
//   for(let i = 0; i < s.length; i++) {
//     out += s[i].toUpperCase() + s[i].repeat(i)
//     out += "-"
   
//   }
//   out = out.slice(0, out.length-1)
//   return out
// }
// console.log(accum("abcd"))
// console.log(accum("RqaEzty"))
// console.log(accum("cwAt"))
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//Count the smiley faces!
// function countSmileys(arr) {
//   const smile = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]
//   //arr = arr.join()
//   let count = 0
//   for(let el in arr) {
//     if(smile.includes(arr[el])) {
//       console.log(arr[el])
//       count +=1
//     }
//   }
  
    
//   return arr.length === 0 ? 0 : count;
// }
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))
// console.log(countSmileys([':D',':~)',';~D',':)']))
// console.log(countSmileys([':)',':(',':D',':O',':;']))

//The Coupon Code
// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   let today = new Date(currentDate)
//   let expDay = new Date(expirationDate)
//   const isCorrect = expDay - today
//   return enteredCode === correctCode && isCorrect >= 0 ? true : false
  
// }
// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))
// console.log(checkCoupon('123ablqc0', '123ablqc0', 'July 5, 2000', 'July 5, 2000'))

//Number of People in the Bus
// var number = function(busStops){
// let totalIn = 0
// let totalOut = 0
//   for(let el in busStops) {
//     totalIn += busStops[el][0]
//     totalOut += busStops[el][1]
//     }
  
//     console.log(totalIn - totalOut)
//   return totalIn-totalOut
// }
// console.log(number([[10,0],[3,5],[5,8]]))
// console.log(number([]))

//Is this a triangle?
// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a; 
// }
// console.log(isTriangle(7,2,2))

//Find the middle element
// function gimme (triplet) {
//   let sorted = []
//   let middle = 0
//   for(let el in triplet) {
//     sorted.push(triplet[el])
//     sorted.sort((a, b) => a - b)
//     middle = sorted[1]
//   }
//    return triplet.indexOf(middle)
// }

// console.log(gimme([2, 3, 1]))
// console.log(gimme([5.9, 10.4, 14.2]))

//How good are you really?
// function betterThanAverage(classPoints, yourPoints) {
//   classPoints.push(yourPoints)
//   let averageScore = classPoints.reduce((acc, el) => acc + el) 
//   averageScore = averageScore / classPoints.length
//   console.log(averageScore)
//   return averageScore < yourPoints ? true : false
// }
// //console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
// console.log(betterThanAverage([2, 3], 5) )

// function greet(language) {
// 	const lang = {
//     "english": 'Welcome',
// "czech": 'Vitejte',
// "danish": 'Velkomst',
// "dutch": 'Welkom',
// "estonian": 'Tere tulemast',
// "finnish": 'Tervetuloa',
// "flemish": 'Welgekomen',
// "french": 'Bienvenue',
// "german": 'Willkommen',
// "irish": 'Failte',
// "italian": 'Benvenuto',
// "latvian": 'Gaidits',
// "lithuanian": 'Laukiamas',
// "polish": 'Witamy',
// "spanish": 'Bienvenido',
// "swedish": 'Valkommen',
// "welsh": 'Croeso'
// }
//   return lang.hasOwnProperty(language) ? lang[language] : 'Welcome'
// }
// console.log(greet('dutch'))
// console.log(greet('duch'))

//Hello World - Without Strings
// const helloWorld = () => {
//  return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33)
// }
// console.log(helloWorld())

//Write Number in Expanded Form
// function expandedForm(num) {
//   let out = []
//   num = num.toString().split("")
//   for(let i = 0; i < num.length; i++) {
    
//     if(num[i] !== "0") {
      
//       out.push(num[i] + "0".repeat(num.slice(i).length-1) )
//     } 
    
//   }
  
//   return out.join(" + ")
// }
// console.log(expandedForm(12))
// console.log(expandedForm(70304))
// console.log(expandedForm(55))

//Highest Scoring Word
// function high(x) {
//   const words = x.split(' ');
//   const alphabetMap = {};
//   for (let i='a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
//     alphabetMap[i] = j;
//   }
//   console.log(alphabetMap)
//   let highestScoringWord = { word: '', score: 0 };
//   words.forEach(w => {
//     const chars = w.split('');
//     const sumOfChars = chars.reduce((count, char) => count + alphabetMap[char.charCodeAt()], 0);
//     if (sumOfChars > highestScoringWord.score) {
//       highestScoringWord = { word: w, score: sumOfChars };
//     }
//   });

//   return highestScoringWord.word;
// }
// console.log(high('take me to semynak'))
// console.log(high('aa b'))
// console.log(high('b aa'))

//Exclamation marks series #1: Remove an exclamation mark from the end of string
// function remove (string) {
//   //coding and coding....
//    return string[string.length-1] === "!" ? string = string.slice(0, string.length-1) : string
// }
// console.log(remove("Hi"))

//Add Length
// function addLength(str) {
//   str = str.split(" ")
//   let res = []
//   for(let el in str) {
//     res.push(str[el] + " " + str[el].length)
//   }
//   return res
// }
// console.log(addLength("apple ban"))
// console.log(addLength("you will win"))
 //Hello, Name or World!
//  function hello(name) {
//   if(!name) return "Hello, World!"
//   name = name[0].toUpperCase() + name.slice(1).toLowerCase()
//   console.log(name)
//   return `Hello, ${name}!` 
// }
// console.log(hello("eee"))
//Remove Duplicates from Sorted Array
// var removeDuplicates = function(nums) {
// nums = nums.filter((el, i) => nums.indexOf(el) === i)
  
  
//   return nums
// };
// console.log(removeDuplicates([1,1,2]))
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
//
//Sum Factorial
// function sumFactorial(arr){
//   const factorial = (n) => (n != 1) ? n * factorial(n - 1) : 1;
  
//   // let out = 0
//   // for(let el in arr) {
//   //   out += factorial(arr[el])
//   // }
//   return arr.reduce((acc, el) => acc+=factorial(el), 0)
// }
// console.log(sumFactorial([4,6]))
// console.log(sumFactorial([5,4,1]))
//Student's Final Grade
// function finalGrade (exam, projects) {
//   if(exam > 90 || projects > 10) return 100;
//   if(exam > 75 && projects >= 5) return 90;
//   if(exam > 50 && projects >= 2) return 75;
  
//   return 0
// }
// console.log(finalGrade(55, 3))

//Complementary DNA
// function DNAStrand(dna){
//   let out = ""
//   for(let el in dna) {
//     if (dna[el] === "A") {
//       out += "T"
//     }
//     if(dna[el] === "T") {
//       out += "A"
//     }
//     if(dna[el] === "G") {
//       out += "C"
//     }
//     if(dna[el] === "C") {
//       out += "G"
//     }
//   }
   
//   return out
// }
// console.log(DNAStrand("ATTGC"))
// console.log(DNAStrand("AAAA"))
// console.log(DNAStrand(""))


// const findX = (seq, x) => {
//   ans = -1;
//   for(let el in seq) {
//     if(ans === -1 && seq[el] === x) {
//       console.log(seq[el])
//       ans = el
      
//     }
//   }
//   return ans
// }
// console.log(findX([1,2,3,10,2], 2))

// const findMax = (arr) => {
//   let ans = arr[0]
//   for (let el in arr) {

//     if(arr[el] < ans) {
//       ans = arr[el]
//     }
//   }
//   return ans
// }
// console.log(findMax([2, 3, 5, 6, 8]))

// const findTwoMax = (arr) => {
//   let out = 0
//   for(let el in arr) {
//     if(arr[el] > out) {
//       out = arr.pop(arr[el])
//       console.log(out)
//     }
//   }
//   return arr
// }
// console.log(findTwoMax([1, 2, 3, 4, 3]))


//Two fighters, one winner.
// function Fighter(name, health, damagePerAttack) {
//   this.name = name;
//   this.health = health;
//   this.damagePerAttack = damagePerAttack;
//   this.toString = function() { return this.name; }
// }
// function declareWinner(fighter1, fighter2, firstAttacker) {
  
//   const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
//   const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
//   console.log(f1, f2)
//   return f1 > f2 ? fighter1.name : f1 < f2 ? fighter2.name : firstAttacker
// }

// console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"))

//
//Fix your code before the garden dies!
// function rainAmount(mm){
//   let amount = 40
//   if (mm < amount) {
//       amount -= mm
//          return `You need to give your plant   ${amount}mm of water`
//     }
    
//   return "Your plant has had more than enough water for today!"
    
// }
// console.log(rainAmount(39))
// console.log(rainAmount(100))

//Convert to Binary
// function toBinary(n){
//   return Number(n.toString(2))
// }
// console.log(toBinary(5))

//Multiplication table for number
// function multiTable(number) {
//   let str = ""
//   for(let i = 1; i <= 10; i++) {
//     str += `${i} * ${number} = ${i*number}\n`
    
//   }
//   return str.slice(0, str.length -1)
// }
// console.log(multiTable(2))
//
//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// String.prototype.toAlternatingCase = function () {
//   let out = ""
//   let str = this.toString()
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toLowerCase()) {
//       out += str[i].toUpperCase()
//     } else {
//       out += str[i].toLowerCase()
//     }
//   }
//   return out
  
// }
// console.log("1A2B3C4D5E".toAlternatingCase())
// console.log("Hello World".toAlternatingCase().toAlternatingCase())

//Remove duplicates from list
// function distinct(a) {
//   return a.filter((el, i) => a.indexOf(el) === i);
// }
// console.log(distinct([1, 1, 1, 2, 6, 5, 1]))
//String cleaning
// function stringClean(s){
//   return s.replace(/[0-9]/g, "")
// }
// console.log(stringClean('This looks5 grea8t!'))

//Check the exam
// function checkExam(array1, array2) {
//   let out = 0
//   for(let el in array1) {
//     if(array1[el] === array2[el]) {
//       out += 4
//     } if (array1[el] !== array2[el]) {
//       out -= 1
//     } 
//      if (array2[el] === "") {
//       out += +1
//     }
//   }
  
//   return out < 0 ? 0 : out
//  }
//  console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
//  console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))
//  console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))

//Delete occurrences of an element if it occurs more than n times
// function deleteNth(arr,n){
//   const result = []
  
//   for (const key in arr) {
//     const exist = result.filter(item => item === arr[key]).length
//     console.log(exist)
//     if (exist < n) {
//        result.push(arr[key])
       
//     } 
//   }
//   console.log(result)
//   return result
// }
// console.log(deleteNth([20,37,20,21], 1))
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))

//binary search
// function binarySearch(arr, item) {
//   let low = 0
//   let high = arr.length-1
//   let mid
//   while(low <= high) {
//     mid = (low+high)
//     let guess = arr[mid]
//     if(guess === item) {
//       return mid
//     } 
//     if (guess > item) {
//       high = mid -1
      
//     } else {
//       low = mid + 1
      
//     }
//   }
//   return null
//   console.log()
// }
// console.log(binarySearch([1, 3, 5, 7, 9], 5))


//Is the string uppercase?
// String.prototype.isUpperCase = function() {
//   let str = this.toString().split()
//   for(let el in str) {
//     if(str[el] === str[el].toUpperCase()) {
//       return true
//     }
//   }
//   return false
// }
// console.log('HELLO WOrLD'.isUpperCase())

//No zeros for heros
// function noBoringZeros(n) {
  
//   let str = n.toString().split("")
  
//   for(let i=0;i<=str.length;i++) {
//     if(str[str.length-1] === "0"){
//       str.pop()
//       console.log(str)
//     } else {
//        return +str.join("")
//     }
//   }
 
// }
// const noBoringZeros = (n) => {
// return +String(n).replace(/0+$/g, "")
// }
// console.log(noBoringZeros(9600000000000%10 ===0))
// console.log(noBoringZeros(1450))
// console.log(noBoringZeros(-14050000))
// function noBoringZeros(n) {

//   while ( n % 10 == 0 && n != 0 ){
//     n = n / 10;
//     }

//   return n;
// }

//Invert values
// function invert(array) {
//   let out = array.map(el => ~el+1)
//   return out
// }
// console.log(invert([1,-2,3,-4,5]))
//Fix string case
// function solve(s){
//   let lowCased = 0
//   for(let el in s) {
//     if(s[el] === s[el].toLowerCase()) {
//       lowCased++
//     }
//   }
//   let upCased = s.length - lowCased
//   if(upCased > lowCased) {
//     return s.toUpperCase()
//   } 
//   return s.toLowerCase()
// }
// console.log(solve("COde"))
//Binary Addition
// function addBinary(a,b) {
//   return (a+b).toString(2)
// }
// console.log(addBinary(5, 9))

//Filter out the geese
// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter((el, i) => !geese.includes(el))
//   console.log(out)
  
// };
// console.log(gooseFilter( ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

//
//Alan Partridge II - Apple Turnover
// function apple(x){
  
//   return +x*+x > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
// }
// console.log(apple(4))
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let b = "hello"

// function a(b){
//   var b = "kuku"
//   return function(b){
//     return b
//   }
//   }
  


// const c = a()
// console.log(c())
// function areYouPlayingBanjo(name) {
  
//   return name[0] === "r" || name[0] === "R" ? name + " plays banjo" : name + " does not play banjo";
// }
//Regular Ball Super Ball
// var Ball = function(ballType) {
//     if(ballType) {
//       this.ballType = ballType
//     } else {
//       this.ballType = "regular"
//     }
// }
  
  

// const ball1 = new Ball("sdss");
// console.log(ball1.ballType)

//
//aximum Length Difference
// function mxdiflg(a1, a2) {
//   let summA = a1.reduce((acc, el) => acc+el.length, 0)
//   let summB = a2.reduce((acc, el) => acc+el.length, 0)
//   console.log(Math.max(Math.abs(a1.length, a2.length)))
  

// }
// console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))

//
//Data Reverse
// function dataReverse(data) {
//   let copy = [...data]

//   let arr = []
//   for(let i = 0; i < copy.length; i+=8) {
    
//     arr.unshift(...copy.slice(i, i+8))
//   }
//   return arr
// }
// console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))
//console.log(dataReverse([+0, +0, 1, 1, +0, 1, 1, +0, 1, +0, +0, +0, +0, 1, +0, +0, +0, 1, +0, 1, 1, 1, +0, +0, 1, +0, 1, +0, +0, 1, +0, 1, 1, +0, 1, +0, 1, 1, 1, +0, 1, +0, 1, 1, +0, 1, 1, +0, 1, +0, 1, 1, 1, 1, 1, +0, 1, 1, +0, +0, 1, +0, 1, 1, 1, +0, +0, 1, 1, +0, +0, 1, 1, 1, +0, 1, 1, +0, +0, 1, +0, 1, +0, 1, 1, +0, 1, 1, +0, +0, 1, +0, 1, +0, +0, +0, +0, 1, 1, +0, +0, 1, +0, +0, +0, 1, +0, 1, +0, +0, 1, 1, +0, 1, +0, 1, +0, 1, 1, 1, +0, 1, +0, +0, 1, +0, 1, 1, +0, 1, +0, 1, +0, 1, 1, +0, 1, 1, 1, 1, +0, +0, 1, 1, 1, +0, 1, 1, 1, +0, +0, +0]))
//[1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]

//Count strings in objects
// function strCount(obj){
//   let count = 0
//   let arr = []
//   for(let i in obj) {
//     if(typeof obj[i] === "string") {
//       count++
//     } 
//     if(typeof obj[i] === "object") {
//      count += strCount(obj[i])
//     }
//   }
  
//  return count

// }
// console.log(strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   }))
//16+18=214
// function add(num1, num2) {
//   let str = ""
//   num1 = String(num1).split("")
//   num2 = String(num2).split("")
//   while(num1.length !== num2.length) {
//     if(num1.length > num2.length) {
//       str+= num1.shift()
//     } else {
//       str+=num2.shift()
//     }
//   }
//   for(let i = 0; i < num1.length; i++) {
//     str+=Number(num1[i]) + Number(num2[i])
//   }
     
//   return +str
// }
// console.log(add(248, 208))

//Add property to every object in array
// const addProp = (questions) => {
//   for(let el in questions) {
//     questions[el].usersAnswer = null
//   }
//   return questions
// }
// console.log(addProp([{
//   name: "logan",
//   last: "hord"
// },
// {
//   name: "lem",
//   last: "kor"
// }]))
//Colour Association
// function colourAssociation(array){
//     // let out = array.map(([key, value]) => ({[key]: value}))
//     let out = []
//     for(let el in array) {
//       out[el] = {[array[el][0]]: array[el][1]}
//     }
//     return out
//   }
// console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))
//Combine objects
// function combine(obj1, obj2) {
  
// }
// console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }))

// function Accumulator(startVal) {
//   this.value = startVal;
//   this.read = function(){
//       return this.value+=startVal
    
//   }
// }
// let acc1 = new Accumulator(3)
// let acc2 = new Accumulator(10)
// console.log(acc1.read())
//Combine objects
// function combine(...objects) {
//   const result = {};
//   for (const obj of objects) {
//       for (const [key, value] of Object.entries(obj)) {
//       if (result[key] === undefined) {
//         result[key] = value;
//       } else {
//         result[key] += value;
//         console.log(result)
//       }
//     }
//   }
//   return result;
// }
// console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }, {a:50, c: 100}))
//Summing a number's digits
// function sumDigits(number) {
//   let str = number.toString()
//   let out = 0
//   for(let el in str) {
//     out += ~~str[el]
//   }
//   return out
// }
// console.log(sumDigits(33))
//Find the missing element between two arrays
// function findMissing(arr1, arr2) {
//   return arr1.reduce((acc, el) => acc+=el, 0)-arr2.reduce((acc, el) => acc+=el, 0)
// }
// console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]))
// console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))
// console.log(findMissing([7], []))
// console.log(findMissing([1, 2, 3], [1, 3]))

//Get decimal part of the given number
// function getDecimal(n){
  
//   return Math.abs(n%1)
// }
// console.log(getDecimal(2.4))
// console.log(getDecimal(-0.2))
//Maximum Triplet Sum (Array Series #7)
// function maxTriSum(numbers){
//   let unq = numbers.filter((el, i) => numbers.indexOf(el) === i).sort((a, b) => a-b)
//   console.log(unq)
//   let sum = 0
//   for(let i = unq.length - 3; i < unq.length; i++) {
//       sum+=unq[i]
//   }
//   return sum
// }
// console.log(maxTriSum([3,2,6,8,2,3]))
// console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67]))
//Hex to Decimal
// function hexToDec(hexString){
//   return parseInt(hexString, 16)
// }
// console.log(hexToDec("10"))
// console.log(hexToDec("a"))
//Whose bicycle?
// 
//Nickname Generator
// function nicknameGenerator(name){
//   if(name.length < 4) {
//     return "Error: Name too short"
//   }
//   let vowel = /[aeiou"]/gi
//   if(vowel.test(name[2])) {
//     return name.slice(0, 4)
//   } else {
//     return name.slice(0, 3)
//   }
  
// }
// console.log(nicknameGenerator("Jeannie"))
// console.log(nicknameGenerator("Samantha"))
// console.log(nicknameGenerator("Sa"))
//Count characters in your string
// function count(string) {
//   let obj = {}
//   for (let i = 0; i < string.length; i++) {
//     obj[string[i]] = obj[string[i]] ? obj[string[i]]+=1 : 1
//   }
//   return obj
 
// }
// console.log(count("aaaabcszx"))

//Odd-Even String Sort
// function sortMyString(S) {
//   let out = ""
//   let out2 = ""
//   for(let el in S) {
//     if(el % 2 === 0) {
//       out += S[el]
//     } else {
//       out2 += S[el]
//     }
//   }

//   return out + " " + out2;
// }
// console.log(sortMyString("CodeWars"))
// function isPowerOfTwo(n){
//   return Math.log2(n) % 1 === 0;
// }
// console.log(isPowerOfTwo(0))

//String Reordering
// function sentence(List) {
//   let out = []
//   let sorted = List.sort((a, b) => Object.keys(a) - Object.keys(b)) 
//   for(let el in sorted) {
//     out.push(Object.values(sorted[el]))
//   }
//   return out.join(" ")
// }
// console.log(sentence([
//   {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//   {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//  ]))

 //Minimize Sum Of Array (Array Series #1)
//  function minSum(arr) {
//   let sorted = arr.sort((a, b) => a - b)
//   let out = 0
//   for(let i = 0; i < sorted.length / 2; i++) {
//     let sum = sorted[i] * sorted[sorted.length - 1 - i]
//     out += sum
//   }
//   return out
// }
// console.log(minSum([5,4,2,3]))
// console.log(minSum([12,6,10,26,3,24]))
// console.log(minSum([9,2,8,7,5,4,0,6]))
 
//Unpacking Arguments
// function spread(func, args) {
   
//   return func(...args)
// }
// console.log(spread(function(x,y){return x+y}, [1,2]))

//Vowel one
// function vowelOne(s){
//   let out = ''
//   let vowels = /[aeiou]/i
//   for (let i = 0; i < s.length; i++) {
//     if(vowels.test(s[i])) {
//       out += "1"
      
//     } else {
//       out += "0"
//     }
//   }
//   return out
// }
// console.log(vowelOne("123, arou"))

//
//Who is the killer?
// function killer(suspectInfo, dead) {
//   let out = []
//   for(let el in suspectInfo) {
//     for(let j = 0; j < dead.length; j++) 
//     if(suspectInfo[el].indexOf(dead[j]) !== -1) {
//       out.push(el)
      
//     }
//   }
  
//   return out[0]
// }
// console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'],
// 'Johnny': ['David', 'Kyle', 'Lucas'],
// 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))
// console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']))

//Simple Encryption #1 - Alternating Split
// function encrypt(text, n) {
//   if(n <= 0 || text === null) {
//     return text
//   }
//   let out = ""
//   let odd = ""
//   let even = ""
//  for(let i = 0; i < text.length; i++) {
//   if(i % 2 !== 0) {
//     odd += text[i]
//   } else {
//     even += text[i]
//   }
//  }
//   out = odd + even
//   n--
//   return encrypt(out, n)
// }

// function decrypt(encryptedText, n) {
  
//   if(n <= 0 || encryptedText === null) {
//     return encryptedText
//   }
//   let out = ""
//   let first = encryptedText.slice(0, encryptedText.length/2)
//   let second = encryptedText.slice(encryptedText.length/2, encryptedText.length)
  
//   for(let i = 0; i < Math.max(first.length, second.length); i++) {
//     out += second[i] + first[i]
//     console.log(out)
//   } 
  
//   if(encryptedText.length % 2 !== 0) {
//     out = out.slice(0, out.length - 9)
//     console.log(out)
//   }
//   n--
//   return decrypt(out, n)
// }


// // console.log(encrypt("012345", 3))
// // console.log(encrypt("01234", 3))

// console.log(decrypt("135024", 1))
// console.log(decrypt("hsi  etTi sats!", 1))
// console.log(decrypt("s eT ashi tist!", 2))
// console.log(decrypt(" Tah itse sits!", 3))
// console.log(decrypt("This is a test!", 4))
// console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1))
// console.log(decrypt("hsi  etTi sats!", 1))
// console.log(decrypt("13024", 1))
// console.log(decrypt(null, 0))
// console.log(decrypt("", 0))

//Which color is the brightest?
// function brightest(colors){
//   let index = 0
//   let v = 0;
//   let max = 0
//   for(let i = 0; i < colors.length; i++) {
//     let color = colors[i]
//     let r = parseInt(color.slice(1, 3), 16);
//     let g = parseInt(color.slice(3, 5), 16);
//     let b = parseInt(color.slice(5), 16);
//     v = Math.max(r, g, b)
//     if(v > max) {
//       max = v
//       index = i
//     }
//   }
//   return colors[index]
//  }
// //console.log(brightest(["#001000", "#000000"]))
// //console.log(brightest(["#FFFFFF", "#123456", "#000000"]))
// //console.log(brightest(['#7F2B33', '#ABB267', '#D7A33F', '#61C2FA', '#43DF2D']))
// console.log(brightest(["#00FF00", "#FFFF00"]))

//Digits explosion
// function explode(s) {
//   let out = "";
//   for(let el in s) {
//     out += s[el].repeat(s[el])
//   }
//   return out;
// }
// console.log(explode("123"))
//Handshake problem
// function getParticipants(handshakes){
//   let farmers = 0
//   while(handshakes > farmers * (farmers - 1) / 2){
//     farmers++
//   }
//   return farmers
// }
// console.log(getParticipants(0))
//Duplicate Encoder
// function duplicateEncode(word){
//   let out = "";
//   word = word.toLowerCase()
//   let dubl = word.split("").filter((el, i) => word.indexOf(el) !== i)
//   for(let i = 0; i < word.length; i++) {
//     if(dubl.includes(word[i])) {
//       out += ")"
//     } else {
//       out += "("
//     }
//   }
//   return out;
// }
// console.log(duplicateEncode("din"))
// console.log(duplicateEncode("Success"))
// console.log(duplicateEncode("(( @"))

//N-th Fibonacci
// function nthFibo(n) {
//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   return nthFibo(n - 1) + nthFibo(n - 2);
// }
// console.log(nthFibo(8))
//Head, Tail, Init and Last
// const head = (x) => {
//   return x[0]
// }
// const tail = (x) => {
//   return x.slice(1)
// }
// const init = (x) => {
//   return x.slice(0, x.length - 1)
// }
// const last = (x) => {
//   return x[x.length -1]
// }
// console.log(last([1,2,3,4,5]))
//Array Deep Count
// function deepCount(a){
  
//   let count = 0
//   for(let i = 0; i < a.length; i++) {
//       count++
//      if(Array.isArray(a[i])) {
//        count += deepCount(a[i])
//      } 
//   }
//   return count
// }
// console.log(deepCount([1, 2, [3, 4, [5]]]))
// console.log(deepCount([]))
// console.log(deepCount(["x", "y", ["z"]]))
// console.log(deepCount([[[[[[[[[]]]]]]]]]))
// console.log(deepCount([[[]],[[]],[[]]]))
//length-of-missing-array
// function getLengthOfMissingArray(arrayOfArrays) {
//   if(!arrayOfArrays || !arrayOfArrays.length) {
//     return 0
//   }
  
//   let arrLength = []
//   for(let i = 0 ; i < arrayOfArrays.length; i++) {
//     if(arrayOfArrays[i] === null) {
//       return 0
//     } else {
//       arrLength.push(arrayOfArrays[i].length)
//     }
    
//   }
//   arrLength.sort((a, b) => a-b)
//   console.log(arrLength)
//   for(let i = arrLength[0]; i <= arrLength[arrLength.length-1]; i++) {
//     if(arrLength.includes(0)) {
//       return 0
//     } 
//     if(!arrLength.includes(i)) {
//       return i
//     }
//   }
// }
// console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
// console.log(getLengthOfMissingArray([]))
// console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ]))
// console.log(getLengthOfMissingArray([[ 3, 3, 1 ],[ 4, 4, 4, 1, 1, 1 ], [1, 0, 0, 3, 1, 1, 0], [ 4, 0, 1, 1 ]]))
// console.log(getLengthOfMissingArray([ [ 1 ], [ 5, 2, 9 ], [ 4, 0, 1, 1 ], [ 5, 6, 7, 8, 9 ], [] ]))
// console.log(getLengthOfMissingArray([[1, 2, 3], null]))
//Pair of gloves
// function numberOfPairs(gloves) {
  
//   let pairs = {};
//   for(let i = 0; i < gloves.length; i++) {
//     if(!pairs[gloves[i]]) {
//       pairs[gloves[i]] = 1
//     } else {
//       pairs[gloves[i]] +=1
//     }
//   }
  
//   let count = 0
//   for(let key in pairs) {
//     count += Math.floor(pairs[key]/2)
//   }
  
//   return count
// }

// console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]))
// console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]))
//  console.log(numberOfPairs(['gray','black','purple','purple','gray','black']))
//console.log(numberOfPairs([ 'Green', 'Silver', 'Gray', 'Lime', 'White', 'Yellow' ]))

// console.log(numberOfPairs([
//   'Silver', 'Yellow',  'Black',  'Gray',
//   'Teal',   'Silver',  'Teal',   'Lime',
//   'Black',  'Blue',    'White',  'Olive',
//   'Lime',   'Fuchsia', 'Teal',   'Purple',
//   'Black',  'Aqua',    'Red',    'Maroon',
//   'Gray',   'Red',     'Navy',   'Aqua',
//   'Navy',   'Olive',   'Aqua',   'Purple',
//   'Olive',  'Red',     'Purple', 'Yellow',
//   'Maroon', 'Teal',    'Teal'
// ]))
//13
// console.log(numberOfPairs([
//   'Purple', 'Black',  'Green',   'Black',  'Silver', 'Purple',
//   'Green',  'Maroon', 'Fuchsia', 'Black',  'Silver', 'Navy',
//   'Olive',  'Olive',  'Gray',    'Olive',  'Purple', 'Purple',
//   'Aqua',   'Purple', 'Fuchsia', 'Maroon', 'Navy',   'Maroon',
//   'White',  'Yellow', 'Blue',    'Red',    'Purple', 'Purple',
//   'Teal',   'Green',  'Red',     'Gray',   'Navy',   'Blue',
//   'Navy',   'Red',    'Gray',    'Teal',   'Teal',   'Maroon',
//   'Gray',   'Yellow', 'Aqua',    'Gray',   'Aqua',   'Lime',
//   'Blue',   'Lime',   'Lime',    'White',  'Red',    'Black',
//   'Teal',   'Silver', 'Teal',    'Gray',   'Navy',   'Fuchsia',
//   'Silver', 'Purple', 'White',   'Red',    'White',  'Purple',
//   'Yellow', 'Purple', 'White',   'Blue',   'White',  'Maroon',
//   'Teal',   'Gray',   'Fuchsia', 'Black',  'Purple', 'Red',
//   'White',  'Lime',   'Gray',    'Red',    'Teal',   'Blue',
//   'Silver', 'Teal',   'Teal',    'Yellow', 'Silver', 'Gray',
//   'Olive',  'Gray',   'Navy'
// ]))
//42
//Sorting by bits
// function sortByBit(arr) {
//   const countBits=(num)=>{
//       return [...(num).toString(2)].reduce((acc,el)=> el==='1' ? acc+1 : acc, 0)
//   }
// return arr.sort((a,b)=> countBits(a)-countBits(b) ||  a-b);
// }
// //console.log(sortByBit([7, 6, 15, 8]))
// console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))
//Let's Recycle!
// function recycle(array) {
  
//   let bin1 = [], bin2 = [], bin3 = [], bin4 = []
//   for(let i = 0; i < array.length; i++) {
//     if(array[i].material === "paper" || array[i].secondMaterial === "paper") {
//       bin1.push(array[i].type)
//     }
//     if(array[i].material === "glass" || array[i].secondMaterial === "glass") {
//       bin2.push(array[i].type)
//     }
//     if(array[i].material === "organic" || array[i].secondMaterial === "organic") {
//       bin3.push(array[i].type)
//     }
//     if(array[i].material === "plastic" || array[i].secondMaterial === "plastic") {
//       bin4.push(array[i].type)
//     }
//   }  

//   return [bin1, bin2, bin3, bin4]
// }
// console.log(recycle([
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]))
//Javascript Mathematician
// function calculate(...arg) {
// let set = 0
// arg.forEach(el => set+=el)
// let out = set
// return function(...set2) {
//   set2.forEach(el => out+=el)
//   return out
// }
// }
// console.log(calculate(2,4)(3,7,1))
//Sum of odd numbers
// function rowSumOddNumbers(n) {
//  return n ** 3
// }
// console.log(rowSumOddNumbers(3))


//Javascript from the Inside #1 : Map - need to solve!!!


//My Language Skills
// function myLanguages(results) {
//   let out = [];
//   let arr = Object.entries(results).sort((a, b) => b[1] - a[1])
//   console.log(arr)
//   for(let el in arr) {
//     if(arr[el][1] >= 60) {
//       out.push(arr[el][0])
//     }
//   }

//   return out.filter((el,i) => out.indexOf(el) === i)
// }
// console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71}))
//Run-length encoding
// var runLengthEncoding = function(str){
//   let out = [];
//   let count = 0
//   for(let i = 0; i < str.length; i++) {
//     count++
//    if(str[i] !== str[i+1]) {
//     out.push([count, str[i]])
//     count = 0
//    } 
//   }
//   return out
// }
// console.log(runLengthEncoding("hello world!"))
// console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"))
//Walk the Object Path
// function find(object, path) {
  
//   let purePath = path.split(".")
//   console.log(purePath)
//   for (let i = 0; i < purePath.length; i++) {
//     if(object.hasOwnProperty(purePath[i])) {
//       object = object[purePath[i]]
      
//     } else {
//       return undefined
//     }
//   }
  
//   return object
// }
// console.log(find({ people: ['John', 'Dave', 'Lisa'] }, 'people.1'))
// console.log(find({ "user": { "name": { "first": '"John"', "last": "Snow" } } }, "user.name.first"))
//Javascript from the Inside #2: Filter
// Array.prototype.filter = function(fn, nThis) {
  
//   let out = []
//   for(let i = 0; i < this.length; i++) {
//     if(fn(this[i])) {
//       out.push(this[i])
//     }
//   }
//   return out;
// }
// console.log([1, 2, 3, 4, 5].filter((el, i) => el===1))
//Human readable duration format
// function formatDuration (seconds) {
//   if(!seconds) {
//     return "now"
//   }
//   let unit = [
//     ["31536000", "year"],
//     ["86400", "day"],
//     ["3600", "hour"],
//     ["60", "minute"],
//     ["1", "second"]
//   ]
//    let arr = []
//   for(let i = 0; i < unit.length; i++) {
//     if(seconds >= unit[i][0]) {
//       arr.push(Math.floor(seconds / unit[i][0]) + " " + unit[i][1] + (Math.floor(seconds/unit[i][0]) > 1 ? "s" : ""))
//       seconds%=unit[i][0]
//     }
//   }
//   let last = " and " + arr[arr.length-1]
//   let out = arr.slice(0, arr.length-1).join(", ") + last
//   return arr.length > 1 ? out : arr.join()
// }
// console.log(formatDuration(1333333))
//Power .bind()
// Function.prototype.bind = function (ctx) {
//   let func = this;
//   return function(...args) {
//     let correctCtx = this === global ? ctx : this
//     return func.apply(correctCtx, args)
//   }
// };
//Reverse a number in any base
// function reverseNumber(n, b) {
//   if (b === 1n) return n;
//   let res = 0n;
//   while (n > 0n) {
//     res = res * b + n % b;
//     n /= b;
//   }
//   return res;
// }
// console.log(reverseNumber(12n ,2n))
//Can you keep a secret?
// function createSecretHolder(secret) {
//   let val = secret
//   return {
//       getSecret: function() {
//       return val
//     },
//       setSecret: function(value) {
//       val = value
//     }
//   }
// }
// let obj = createSecretHolder(5)
// obj.setSecret(2)
// console.log(obj.getSecret())
//Unlucky Days
// function unluckyDays(year){
//   let fridays = 0
//   for(let m = 0; m < 12; m++) {
//     if(new Date(year, m, 13).getDay() === 5) {
//       fridays++ 
//     }
//   }
//   return fridays
// }
// console.log(unluckyDays(1001))
//Running out of space
// function spacey(array){
//   let out = []
//   for(let i = 1; i <= array.length; i++) {
//     out.push(array.slice(0, i).join(""))
//   }
//   return out
// }
// console.log(spacey(['i', 'have','no','space']))
//['i','ihave','ihaveno','ihavenospace']
// function xor(a, b) {
//   return Boolean(a ^ b)
// }
// console.log(xor(true, true))
//Sum of Minimums!
// function sumOfMinimums(arr) {
//   let out = 0;
//   for(let el in arr) {
//     out += arr[el].sort((a, b) => a-b)[0]
//   }
//     return out;
// }
// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))

//SantaClausable Interface
// function isSantaClausable(obj) {
//   if(typeof obj.sayHoHoHo === "function" && typeof obj.distributeGifts === "function" && typeof obj.goDownTheChimney === "function") {
//     return true
//   }
//   return false
// }
// console.log(isSantaClausable({sayHoHoHo: function() { console.log('Oink Oink!') }}))
//JavaScript class-like objects
// class Animal {
//   constructor(name, type) {
//     this.name = name,
//     this.type = type
  
//     this.toString = function () {
//       return `${this.name} is a ${this.type}`
//     }
//   }
// }

// const dog = new Animal("max", "dog")
// console.log(dog.toString())
//
//Fun with ES6 Classes #2 - Animals and Inheritance
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }
// class Shark extends Animal {
//   constructor(name, age, status) {
//     super(name, age);
//     this.legs  = 0,
//     this.species = "shark",
//     this.status = status
//   }
// }

// class Cat extends Animal {
//     constructor(name, age, status) {
//     super(name, age, status);
//     this.legs  = 4,
//     this.species = "cat",
//     this.status = status
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master){
//     super(name, age, status);
//     this.legs  = 4,
//     this.species = "dog",
//     this.master = master,
//     this.status = status
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
// }
// const spitsy = new Cat("Spitsy", 6, "sleeping");
// const billy = new Shark("Billy", 3, "Alive and well");
// const doug = new Dog("Doug", 12, "Serving his master", "Eliza");
// console.log(doug.greetMaster())
//Fun with ES6 Classes #4 - Cubes and Setters
// class Cube {
//   constructor(length) {
//     this.length = length
//   }
//   set volume(val) {
//     this.length = Math.cbrt(val)
//   }
//   set surfaceArea(valS) {
//     this.length = Math.sqrt(valS/6)
//   }
//   get volume() {
//     return Math.pow(this.length, 3)
//   }
//   get surfaceArea() {
//     return Math.pow(this.length, 2) * 6
//   }
// }
// const cube = new Cube(5)
// console.log(cube.length)
// console.log(cube.volume)
// console.log(cube.surfaceArea)
//Product of Largest Pair

// function maxProduct(a) {
//     let max1 = Number.NEGATIVE_INFINITY;
//     let max2 = Number.NEGATIVE_INFINITY;
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] > max1) {
//         max2 = max1;
//         max1 = a[i];
//       } else if (a[i] > max2) {
//         max2 = a[i];
//       }
//     }
//     return max1 * max2;
//   }
// console.log(maxProduct([2, 1, 5, 0, 4, 3]))
//Playing Cards Draw Order – Part 1
// const draw = (deck) => {
// 	const drawnCards = [];
//       while(deck.length>1) {
//       drawnCards.push(deck.shift())
//       deck.push(deck.shift())
//     }
//    drawnCards.push(deck)
// 	return drawnCards.flat()
// };
// console.log(draw(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]))
// console.log(draw([ '9H', '7H', '5C', '6C', '6D' ]))
//["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"];
//[ '9H', '5C', '6D', '6C', '7H' ]

//Fun with ES6 Classes #6 - Fake Files (Basic)
// class File {
//   constructor(fullName, contents) {
//     this._fullName = fullName;
//     this._contents = contents || "";
//     this._currentLine = 0;
//     this._currentChar = 0;
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   get filename() {
//     return this._fullName.split('.').slice(0, -1).join('.');
//   }

//   get extension() {
//     return this._fullName.split('.').pop();
//   }

//   getContents() {
//     return this._contents;
//   }

//   write(str) {
//     if (this._contents.length === 0) {
//       this._contents += str;
//     } else {
//       this._contents += '\n' + str;
//     }
//   }

//   gets() {
//     const lines = this._contents.split('\n');
//     if (this._currentLine < lines.length) {
//       return lines[this._currentLine++];
//     }
//     return undefined;
//   }

//   getc() {
//     if (this._currentChar < this._contents.length) {
//       return this._contents[this._currentChar++];
//     }
//     return undefined;
//   }
// }
// const a = new File("abc.txt", "content")
// a.fullName = "tt"
// console.log(a.fullName)
// console.log(a.filename)
// console.log(a.extension)
// console.log(a.getContents)
//Defining getters and setters on an existing class
// class Person {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   getName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// Object.defineProperty(Person.prototype, 'name', {
//   get() {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set(fullName) {
//     const [firstName, lastName] = fullName.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// });
//Array Helpers
// Array.prototype.square = function () {
//   let out = []
  
//   for(let i = 0; i < this.length; i++) {
//     out.push(this[i] * this[i])
//   }
//   return out
// }
// Array.prototype.cube = function () {
//   let out = []
  
//   for(let i = 0; i < this.length; i++) {
//     out.push(Math.pow(this[i], 3))
//   }
//   return out
// }
// Array.prototype.average = function () {
//   let out = 0
  
//   for(let i = 0; i < this.length; i++) {
//     out+=this[i]
//   }
//   return out/this.length
// }
// Array.prototype.sum = function () {
//   let out = 0
  
//   for(let i = 0; i < this.length; i++) {
//     out+=this[i]
//   }
//   return out
// }
// Array.prototype.even = function () {
//   let out = []
  
//   for(let i = 0; i < this.length; i++) {
//     if(this[i] % 2 === 0) {
//       out.push(this[i])
//     }
//   }
//   return out
// }
// Array.prototype.odd = function () {
//   let out = []
  
//   for(let i = 0; i < this.length; i++) {
//     if(this[i] % 2 !== 0) {
//       out.push(this[i])
//     }
//   }
//   return out
// }
// console.log([1, 2, 3, 4, 5].odd())

// const binary = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;
  
//   for(let el in arr) {
//     let mid = (start+end);
//     let guess = arr[mid]
//     if(guess === target) {
//       return mid
//     }
//     if(guess > target) {
//       end = mid - 1
//     } else {
//       start = mid + 1
//     }
//   }
//   return null
// }
// console.log(binary([1, 3, 5, 7, 8, 15, 22], 22))
//Array#reduce
// Array.prototype.reduce = function(callback, initialValue) {
//   if (typeof callback !== 'function') {
//     throw new TypeError('Первый аргумент должен быть функцией');
//   }

//   const array = this;
//   const length = array.length;

//   // Проверка на пустой массив и отсутствие начального значения аккумулятора
//   if (length === 0 && initialValue === undefined) {
//     throw new TypeError('Массив пуст и отсутствует начальное значение аккумулятора');
//   }

//   let accumulator = initialValue !== undefined ? initialValue : array[0];
//   let startIndex = initialValue !== undefined ? 0 : 1;

//   for (let i = startIndex; i < length; i++) {
//     accumulator = callback(accumulator, array[i], i, array);
//   }
  
//   return accumulator;
// };
// console.log([1, 2, 3, 4, 5].reduce((acc, el) => acc+=el, 0))
//Reverse words
// function reverseWords(str) {
//   let out = ""
//   let arr = str.split(" ")
//   for(let el in arr) {
//     out += arr[el].split("").reverse().join("") + " "
//   }
  

//   return out.slice(0, out.length-1)
// }
// console.log(reverseWords("This is an example!"))
//
//Extract Nested Object Reference
// Object.prototype.hash = function (path) {
//   const properties = path.split('.');
//   let value = this;

//   for (let prop of properties) {
//     if (value && value.hasOwnProperty(prop)) {
//       value = value[prop];
//     } else {
//       return undefined;
//     }
//   }

//   return value;
// };
// console.log({
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// }.hash('person.name'))
//Image host filename generator
// function generateName(){
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
//   let out = "";
//   for(let i = 0; i < 6; i++) {
//     out += alphabet[Math.floor(Math.random() * 2600/100)]
//   }
//   return out
// }
// console.log(generateName())
// console.log(generateName())
// console.log(generateName())
// console.log(generateName())
// console.log(generateName())
//Permute a Palindrome
// function permuteAPalindrome (input) { 
//   const out = input.split("").sort().join("").replace(/(.)\1/g, "")
//   return out.length < 2
// }
// console.log(permuteAPalindrome("baa"))
// console.log(permuteAPalindrome("adamm"))
// console.log(permuteAPalindrome("junk"))
// console.log(permuteAPalindrome("racecars"))
// console.log(permuteAPalindrome("mhhewypispawktelqluftyawzswklzkqlfibtujrzbimrnilzbnlkubwctjcuesf"))
// console.log(permuteAPalindrome("ndlplowlpwsvcnlrrspusejqaqvjpnyencdrauryonsolas"))
//Printer Errors
// function printerError(s) {
//   let err = 0
//  for(let el in s) {
//   if(/[n-z]/gi.test(s[el])) {
//     err++
//   }
//  }
//   return `${err}/${s.length}`
// }
// console.log(printerError("aaabbbbhaijjjm"))
// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
//Flatten and sort an array
// "use strict";
// function flattenAndSort(array) {
  
//   return array.flat().sort((a, b) => a-b);
// }
// console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
//Find the first non-consecutive number
// function firstNonConsecutive (arr) {
// let out = 0
// arr = arr.sort((a, b) => a-b)
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] + 1 !== arr[i+1]) {
//     out = arr[i+1]
//     break
//   }
// }
// return out ?? null
// }
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
// console.log(firstNonConsecutive([1,2,3,4]))
//Are they the "same"?
// function comp(array1, array2){
//   if(!array1 || !array2) {
//     return false
//   }
//   array1 = array1.sort((a, b) => a-b)
//   array2 = array2.sort((a, b) => a-b)
//   let count = 0;
//   for(let el in array1) {
//     if(array1[el] ** 2 === array2[el]) {
//       count++
//     }
//   }
  
//   return array1.length === count
// }
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],  [121, 14641, 20736, 36100, 25921, 361, 20736, 361]))
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11]  ,  [121, 14641, 20736, 36100, 25921, 361, 20736, 361]))
//L1: Bartender, drinks!
// function getDrinkByProfession(param){
// const obj = {
//   "Jabroni":"Patron Tequila",
//   "School Counselor":"Anything with Alcohol",
//   "Programmer":"Hipster Craft Beer",
//   "Bike Gang Member":"Moonshine",
//   "Politician":"Your tax dollars",
//   "Rapper":"Cristal"
// } 
//   param = param.split(" ").map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(" ")
//   console.log(param)
//   return obj[param] || "Beer"
// }
// console.log(getDrinkByProfession("Bike Gang member"))
//Collatz
// function collatz(n){
//   let out = "";
//   if(n === 1) {
//     return out + n
//   }
//   if(n % 2  === 0) {
//     out += n + "->" + collatz(n / 2) 
    
    
//   } else {
//     out += n + "->" + collatz(3 * n + 1)
    
//   }
//   return out 
// }
// console.log(collatz(4))
// console.log(collatz(3))

// n/2, if n is even
// 3n+1, if n is odd

//Predict your age!
// function predictAge(...arg){
//   return Math.floor(Math.sqrt(arg.reduce((acc, el) => acc += el**2, 0))/2)
// }
// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))

//Unknown amount of duplicates. One missing number.
// function findDupsMiss(arr) {
//   let dupl = arr.filter((el, i) => arr.indexOf(el) !== i)
//   console.log(dupl)
//   let miss
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   for(let i = min; i <= max; i++) {
//     if(!arr.includes(i)) {
//       miss = i
//     }
//   }
//   return [miss, dupl.sort((a, b) => a-b)]
// }

// console.log(findDupsMiss([10,9,8,9,6,1,2,4,3,2,5,5,3]))
//console.log(findDupsMiss([24,25,34,40,38,26,33,29,50,31,33,56,35,36,53,49,57,27,37,40,48,44,32,35,45,52,43,47,26,51,55,28,41,42,46,51,25,30,44,54]))

//Casino chips
// function solve(chips) {
//   const [one, two, three]  = chips.sort((a, b) => b-a)
//   if(one > (two + three)) {
//     return two + three
//   } else {
//     return Math.floor((one + two + three)/2)
//   }
// }
// console.log(solve([12,12,12]))
// console.log(solve([1,23,2]))
// console.log(solve([1, 1, 1]))
//Sort and Star
// function twoSort(s) {
//   let out = ""
//   s = s.sort()[0]
//   return s.split("").join("***")
// }
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
//The dropWhile Function
// function pred(num) {
//   return num % 2 === 0;
// }
// function dropWhile(arr) {
  
//   let ind = 0
//   let out = [...arr]
  
//   for(let el in arr) {
//     if (!pred(arr[el])) {
//       ind = el
//       break
      
//     }
//   }
  
//   return !ind ? [] : out.slice(ind)
// }
// console.log(dropWhile([2,4,6,8,1,2,5,4,3,2]))
// console.log(dropWhile([2,4,10,100,64,78,92]))
// console.log(dropWhile([2,100,1000,10000,5,3,4,6]))

//Maximum subarray sum
// var maxSequence = function(arr){
//   let max = 0
//   let cur = 0
//   for(let el in arr) {
//     cur += arr[el]
//     if(cur > max) {
//       max = cur
//       console.log(max)
//     }
//     if (cur < 0) {
//       cur = 0
//     }
//   }
//   return max
// }
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]))
//Remove the minimum
// function removeSmallest(arr) {
//   let out = [...arr]
//   const min = Math.min(...arr)
//   const index = arr.indexOf(min)
//   out.splice(index, 1)
  
//   return out
// }
// console.log(removeSmallest([2,2,1,2,1]))
//Love vs friendship
// function wordsToMarks(string){
//   const alph = "abcdefghijklmnopqrstuvwxyz"
//   return string.split("").reduce((acc, el) => acc+=alph.indexOf(el) + 1, 0)
// }
// console.log(wordsToMarks("attitude"))

//Meeting
// function meeting(s) {
//   let out = []
//   s = s.split(";")
//   console.log(s.reverse())
//   for(let i = 0; i < s.length; i++) {
//     out.push(`(${s[i].toUpperCase().split(":").reverse().join(", ")})` )
    

//   }
//   return out.sort().join("")
// }
// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))

//Form The Minimum
// function minValue(values){
//   let out = values.filter((el, i) => values.indexOf(el) === i).sort((a, b) => a-b)
//   return +out.reduce((acc, el) => acc + el, "")
// }
// console.log(minValue([1, 3, 1]))
// console.log(minValue([4, 7, 5, 7]))

//Multiplication table
// multiplicationTable = function(size) {
//   let out = []
//   for(let i = 1; i <= size; i++) {
//     let temp = []
//     for(let j = 1; j <= size; j++) {
//       temp.push(i*j)
//     }
//     out.push(temp)
//   }
//   return out
// }
// console.log(multiplicationTable(3))

//Round up to the next multiple of 5
// function roundToNext5(n){
//   if(n % 5 === 0) {
//     return n
//   } else {
//     n = roundToNext5(n+1)
//   }
//   return n
// }
// console.log(roundToNext5(13))

//Even numbers in an array
// function evenNumbers(array, number) {
//   const out = []
//   array = array.reverse()
//   for(let el in array) {
    
//     if(out.length !== number && array[el] % 2 === 0) {
//       out.push(array[el])
//     }
//   }
//   return out.reverse()
// }
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

//Directions Reduction
// function dirReduc(arr){
//   const side = {
//     NORTH: "SOUTH",
//     SOUTH: "NORTH",
//     WEST: "EAST",
//     EAST: "WEST"
//   }
//   for(let el in arr) {
//     if(arr[el] === side[arr[+el+1]]) {
//       arr.splice(el, 2)
//       arr = dirReduc(arr)
//     }
//   }
//   return arr
// }
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))


//Encrypt this!
// const encryptThis = function(text) {
//   let out = []
//   const splitted = text.split(" ")
//   let firstLetter, secondLetter
//   for(let el in splitted) {
//     firstLetter = splitted[el].slice(0, 1).charCodeAt().toString();
//     secondLetter = splitted[el].slice(1);
//     if(secondLetter) {
//       let tempLetFirst = secondLetter[0]
//       let tempLetLast = secondLetter[secondLetter.length-1]
//       secondLetter = secondLetter.replace(tempLetFirst, tempLetLast)
//       secondLetter = secondLetter.slice(0, -1)
//       secondLetter = secondLetter.concat(tempLetFirst)
//       out.push(firstLetter + secondLetter)
//     } else {
//       out.push(firstLetter)
//     }
//   }
//   return out.join(" ")
// }
// console.log(encryptThis("hello world"))
// console.log(encryptThis("A"))
// console.log(encryptThis("Hello"))
// console.log(encryptThis("good"))

//Title Case
// function titleCase(title, minorWords) {
//   if(minorWords) {
//     minorWords = minorWords.toLowerCase().split(" ")
//   } else {
//     minorWords = []
//   }
//   let out = []
  
//  if(title) {
//   title = title.toLowerCase().split(" ")
//   for(let el in title ) {
//     if(minorWords && minorWords.includes(title[el]) && el > 0) {
//       out.push(title[el])
//     } else {
//       out.push(String(title[el][0]).toUpperCase() + title[el].slice(1))
      
//     }
//   }
//  }
//   return out.join(" ")
// }
// console.log(titleCase('a clash of KINGS', 'a an the of'))
// console.log(titleCase('the quick brown fox'))
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
// console.log(titleCase("erer"))

//Find the vowels
// function vowelIndices(word){
//   const out = []
//   const vowels = /[aeiouy]/i
//   for(let el in word) {
//     if(vowels.test(word[el])) {
//       console.log(word[el])
//       out.push(+el+1)
//     }
//   }
//   return out
// }
// console.log(vowelIndices("supercalifragilisticexpialidocious"))

//The Supermarket Queue
// function queueTime(customers, n) {
//   let shop = new Array(n).fill(0)
//   for(let el in customers) {
//     let min = shop.indexOf(Math.min(...shop))
//     shop[min] += customers[el]
//     console.log(shop)
//   }
//   return Math.max(...shop)
// }
// function queueTime(customers, n) {
//   if (customers.length === 0) {
//     return 0; // Базовый случай: если нет покупателей, возвращаем 0
//   }

//   const tills = new Array(n).fill(0); // Создаем массив касс и инициализируем его нулями

//   // Функция-помощник для распределения покупателей по кассам
//   function distributeCustomers(index) {
//     if (index === customers.length) {
//       return; // Базовый случай: все покупатели распределены
//     }

//     const minIndex = tills.indexOf(Math.min(...tills)); // Находим индекс кассы с минимальным временем
//     tills[minIndex] += customers[index]; // Добавляем время обслуживания текущего покупателя к времени кассы

//     distributeCustomers(index + 1); // Рекурсивно вызываем функцию для следующего покупателя
//   }

//   distributeCustomers(0); // Начинаем распределение покупателей с первого покупателя

//   return Math.max(...tills); // Возвращаем максимальное время из всех касс
// }

//console.log(queueTime([5,3,4], 1))
//console.log(queueTime([10,2,3,3], 2))
//console.log(queueTime([2,3,10], 2))
//console.log(queueTime([], 1))

// function factorial(n){
//   let out = 1
//   for(let i = n; i > 0; i--) {
//     out *= i
//   }
//   return out
// }
// console.log(factorial(4))

//Mad Max: Recursion Road
// function max(array) {
//   if(!array.length) {
//     return -Infinity
//   }
//   if(array.length === 1) {
//     return array[0]
//   }
//   if(array.length >= 2) {
//     if(array[0] <= array[1]) {
//       array.splice(0, 1)
//       return max(array)
//     } else {
//       array.splice(1, 1)
//       return max(array)
//     }
//   }
// }

// function max(array) {
//   if(!array.length) {
//     return -Infinity
//   }
//   function scope(){
//     this.maxNum = array.shift()
//     return function(){
//       this.nextNum = max(array)
//       if(maxNum < nextNum) {
//         maxNum = this.nextNum
//       }
//       return maxNum
//     }
//   }
//   const out = scope()
//   return out()
// }
// console.log(max([1,2,3,4,5,34,153, 2456]))
// console.log(max([]))

//Alphabet war
// function alphabetWar(fight) {
  
//     const left = {w: 4, p: 3, b: 2, s: 1}
//     const right = {m: 4, q: 3, d: 2, z: 1}
  
//   let teamL = 0, 
//       teamR = 0;
  
//   for(let el in fight) {
//     if(left.hasOwnProperty(fight[el])) {
//       teamL += left[fight[el]]
//     }
//     if(right.hasOwnProperty(fight[el])) {
//       teamR += right[fight[el]]
//     }
//   }
//   console.log(teamL, teamR)
//   return teamL > teamR ? "Left side wins!": teamL < teamR ? "Right side wins!" : "Let's fight again!";
// }
// console.log(alphabetWar("zdqmwpbs"))
// console.log(alphabetWar("z"))

// function lowercaseCount(str){
//   const lc = /[a-z]/
//   let count = 0
//   for(let el in str) {
//     if(lc.test(str[el]))
//       count++
//   }
//   return count
// }
// console.log(lowercaseCount("abcABC123"))

//
//Sorted? yes? no? how?
// function isSortedAndHow(array) {
//   const ascend = [...array].sort((a, b) => a-b).toString()
//   const descend = [...array].sort((a, b) => b-a).toString()
  
//   if(ascend === array.toString()) return "yes, ascending"
//   if(descend === array.toString()) return "yes, descending"

//   return "no"
// }
// console.log(isSortedAndHow([4, 2, 30]))
// console.log(isSortedAndHow([1, 2, 30]))

// function calculator(a,b,sign){
//   if(typeof a !== "number" || typeof b !== "number") return "unknown value";
  
//   if(sign === "+") return a+b;
//   if(sign === "-") return a-b;
//   if(sign === "*") return a*b;
//   if(sign === "/") return a/b;
    
//   const mr = /\+\-\*\//g
//   if(!mr.test(sign)) return "unknown value";
    
//   return "unknown value"
  
//   }
// //console.log(calculator(1, 2, "+"))
// console.log(calculator(1,2,"*"))

//Most digits
// function findLongest(array){
//   const strArr = array.map(el => String(el).length)
//   let max = -Infinity
//   let ind
//   for(let el in strArr) {
//     if(max < strArr[el]) {
//       max = strArr[el]
//       ind = el
//     }
//   }
//   return array[ind]
// }
// console.log(findLongest([8, 900, 500]))

// function countConseq(count) {
//   let sum = 0;
//   let out = []
//   for(let i = 0; i <= count; i++) {
//     sum += i 
//     out.push(i)
//   }
//   return out.join("+") + " = " + sum
// };
// console.log(countConseq(6))

//Moves in squared strings (I)
// function vertMirror(strng) {
//   const splited = strng.split("\n")
//   let out = []
//   for(let el in splited) {
//     out.push(splited[el].split("").reverse("").join(""))
//   }
//   return out.join("\n")
// }
// function horMirror(strng) {
//   const out = []
//   const splited = strng.split("\n").reverse()
//   for(let el in splited) {
//     out.push(splited[el])
//   }
//   return out.join("\n")
// }
// function oper(fct, s) {
//   return fct(s)
// }

// console.log(oper(vertMirror, "abcd\nefgh\nijkl\nmnop"))
// console.log(oper(horMirror, "abcd\nefgh\nijkl\nmnop"))

//
// function array(string) {
//   const arr = string.split(",")
//   const len = string.split(",").length
//   arr.splice(0, 1)
//   arr.splice(arr.length -1, 1)

//   return len < 3 ? null : arr.join(" ")
// }
// console.log(array("1,2,3,4,5" ))

// function adjacentElementsProduct(array) {
//   const pairs = []
//   for(let i = 0; i < array.length; i++) {
//     if(array[i+1]) {
//       pairs.push(array[i] * array[i+1])
//     }
//   }
  
//   return Math.max(...pairs)
// }
// console.log(adjacentElementsProduct([1, 2, 3, 0]))

//Row Weights
// function rowWeights(array){
//   let team1 = 0
//   let team2 = 0
//   for(let i = 0; i <= array.length; i++) {
//     team1 += array.shift()
//     array.push(0)
//     team2 += array.shift()
//     array.push(0)
//   }
//   return [team1, team2]
// }
// console.log(rowWeights([13, 27, 49]))

//Consonant value
// function solve(s) {
//   let out = []
//   const alpha = " abcdefghijklmnopqrstuvwxyz"
//   const consonant = /[aeiou]/
//   const splited = s.split(consonant)
//   console.log(splited)
//   for(let i = 0; i < splited.length; i++) {
//     let temp = 0
//     if(splited[i].length > 1) {
//       for(let j = 0; j < splited[i].length; j++) {
//         temp += alpha.indexOf(splited[i][j])
//         out.push(temp)
//       } 
//     } else {
//       out.push(alpha.indexOf(splited[i]))
      
//     }
//   }
//   return Math.max(...out);
// };
// console.log(solve("zodiacs"))
// console.log(solve("strength"))

//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

// console.log(sumDigPow(1, 100))
// function sumDigPow(a, b) {
//   var result = [];

//   for (var num = a; num <= b; num++) {
//     if (isEurekaNumber(num)) {
//       result.push(num);
//     }
//   }

//   return result;
// }

// function isEurekaNumber(num) {
//   var digits = String(num).split('');
//   var sum = 0;
//   for (var i = 0; i < digits.length; i++) {
//     sum += Math.pow(digits[i], i + 1);
//   }
  
//   return sum === num;
// }

//Prime Factors
// function primeFactors(n) {
//   let out = []
//   let div = 2
//   while(n >= 2) {
//     if(n % div === 0) {
//       out.push(div)
//       n = n / div
//     } else {
//       div++
//     }
//   }
  
// 	return out;
// }
// console.log(primeFactors(12))

//Build a square
// function generateShape(integer){
//   let out = ""
//   for(let i = 0; i < integer; i++) {
//     for(let j = 0; j < integer; j++) {
//       out += "+"
//     }
//     out += "\n"
//   }
//   return out.slice(0, out.length-1)
// }
// console.log(generateShape(8))

//Number , number ... wait LETTER !
// function doMath(s){
//   let letters = []
//   let letterArr = []
//   let splited = s.split(" ")
//   for(let i = 0; i < splited.length; i++) {
//     let letter = splited[i].match(/[a-z]/g).toString()
//     let number = splited[i].replace(/[a-z]/, "")
    
//     letters.push([letter, +number])
//     letterArr.push(letter)
//   }
//   letterArr.sort()
//   console.log(letterArr)
//   let numbers = []
//   for(let el in letterArr) {
//       console.log(letters[el])
//   }
//   console.log(letters[0])
//   return 
// } 
// //console.log(doMath("24z6 1x23 y369 89a 900b"))
// console.log(doMath("24z6 1z23 y369 89z 900b"))

//Find array
// function findArray(arr1, arr2){
//   let out = []
//   for(let i = 0; i < arr2.length; i++) {
//     out.push(arr1[arr2[i]])
//   }
//   return !arr1.length ? [] : out
// }
// console.log(findArray([], [1, 2, 3]))
// console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]))

//Alternate capitalization
// function capitalize(s){
//   let out = []
//   let strNew1 = "", strNew2 = ""
//   for(let i = 0; i < s.length; i++) {
//     if(i % 2 === 0) {
//       strNew1 += s[i].toUpperCase()
//       strNew2 += s[i].toLowerCase()
//     } else {
//       strNew1 += s[i]
//       strNew2 += s[i].toUpperCase()
//     }
//   }
//   return [strNew1, strNew2]
// };
// console.log(capitalize("abcdef"))

//Take a Ten Minutes Walk
function isValidWalk(walk) {
  let count = 0
  for(let i = 0; i < walk.length; i++) {
    if(walk[i] !== walk[i+1]) {
      count++
    } 
  }
  console.log(walk)
  return count === 10
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))