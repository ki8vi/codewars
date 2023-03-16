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
function openOrSenior(data){
    let out = [];
    for  (let i = 0; i < data.length; i++) {
        if(data[i][0] >= 55 && data[i][1] > 7) {
            out.push("Senior")
        } else {
            out.push("Open")
        }
        
    }
    return out
}
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]