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

//selection - sort -- O(n * n)
// const findSmallest = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         let min = Infinity;
//         let index = null;
//         for(let j = i; j < arr.length; j++) {
//             if(arr[j] < min) {
//                 min = arr[j];
//                 index = j;
//             }
//         }
//         let buf = arr[i];
//         arr[i] = min;
//         arr[index] = buf
//     }
//     return arr
// }
// console.log(findSmallest([115, 33, 67,-3, 43, 2, 1, 444, 1500, -23]))
// const sortArr = (array) => {
//     let arr = [];
//     for(let i = 0; i < array.length; i++) {
//        min = i
//         for(let j = i + 1; j < array.length; j++) {
//             if(array[j] < array[min]) {
//                 min = j
//             }
//         }

//         let first = array[i];
//         array[i] = array[min]
//         array[min] = first
//     }

//     return array
// }

// console.log(sortArr([33, 55, 3, 2, 293, 900, -2, -23, -333]))
//разделяй и властвуй
// function sum(arr) {
//     let out = 0
//     if (!arr.length) {
//       return 0;
//     } else {
//       out = arr.shift() + sum(arr);
//     }

//     return out
//   }
// console.log(sum([1, 2, 3, 4, 5]))
//quick sort --- O(log 2 n * n)
// function qSort(arr) {
//     if(arr.length <= 1) {
//     return arr
//     }
//     let middle = Math.floor(arr.length / 2)
//     let low = []
//     let high = []
//     let pivot = arr[middle]
//     for(let el in arr) {
//         if(middle === el) {
//             continue
//         }
//         if(arr[el] < pivot) {
//             low.push(arr[el])
//         }
//         if(arr[el] > pivot) {
//             high.push(arr[el])
//         }
//     }
//     return [qSort(low), pivot, qSort(high)].flat()
// }
// console.log(qSort([34, 54, 67, 4, 42, 7, 79, 654, 55, 9, 3]))

//graph --поиск в ширину -- speed: O(V + E); space:O(V);
//V - кол-во вершин, E - кол-во рёбер
// const graph = {}
// graph.a = ["b", "c"]
// graph.b = ["f"]
// graph.c = ["d", "e"]
// graph.d = ["f"]
// graph.e = ["f"]
// graph.f = ["g"]

// const breadthSearch = (graph, from, to) => {
//
//     let queue = []
//     queue.push(from)
//     let count = 0
//     while(queue.length > 0) {
//         let current = queue.shift()
//         if(!graph[current]) {
//             graph[current] = []
//         }
//         if(graph[current].includes(to)) {
//             return true
//         } else {
//             queue = [...queue, ...graph[current]]
//             console.log(queue)
//         }

//     }
//     return false
// }
// console.log(breadthSearch(graph, "a", "g"))

//algorithm Dijkstra
const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function findShort(graph, from, to) {
  const costs = {};
  const processed = [];
  let neighbors = {};
  for (let el in graph) {
    if (el !== from) {
      let value = graph[from][el];
      costs[el] = value || Infinity
    }
  }
  let node = findNodeLowestCost(costs, processed)
  while(node) {
    const cost = costs[node]
    neighbors = graph[node]
    for(let el in neighbors) {
        let newCost = cost + neighbors[el]
        if(newCost < costs[el]) {
            costs[el] = newCost
        }
    }
    processed.push(node)
    node = findNodeLowestCost(costs, processed)
  }
  
  return costs
}
console.log(findShort(graph, "a"));

function findNodeLowestCost(costs, processed) {
    let lowestCost = Infinity;
    let lowestNode;
    for(let el in costs) {
        let cost = costs[el]
        if(cost < lowestCost && !processed.includes(el)) {
            lowestCost = cost
            lowestNode = el
        }
    }
    return lowestNode
}
