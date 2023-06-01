//binary search -- O(log n)
// const binary = (arr, target) => {
//       let start = 0;
//       let end = arr.length - 1;
      
//       for(let el in arr) {
//         let mid = (start+end);
//         let guess = arr[mid]
//         if(guess === target) {
//           return mid
//         }
//         if(guess > target) {
//           end = mid - 1
//         } else {
//           start = mid + 1
//         }
//       }
//       return null
// }
// console.log(binary([1, 3, 5, 7, 8, 15, 22], 22))

//сортировка выбором -- O(n * n)
const findSmallest = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let min = Infinity;
        let index = null;
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }
        let buf = arr[i];
        arr[i] = min;
        arr[index] = buf
    }
    return arr
}
console.log(findSmallest([115, 33, 67,-3, 43, 2, 1, 444, 1500, -23]))
