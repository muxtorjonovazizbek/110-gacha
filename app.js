// 104. Berilgan ob'ekt ichidagi barcha qiymatlar yig'indisini toping (faqat son qiymatlarni).

// function sumObjectValues(obj) {
//     let arr = [{value: obj, step: 1}]
//     let result = 0

//     for (let i = 0; i < arr.length; i++) {
//         const {value, step} = arr[i]
//         for(let key in value) {
//             if (typeof value[key] === "object") {
//                 arr.push({value: value[key], step: step + 1})
//             }else {
//                 result += value[key]
//             }
//         } 
//     }
//     return result
//  }
 
//  // Test case
//  const obj = {
//      a: 1,
//      b: {
//          c: 2,
//          d: {
//              e: 3
//          }
//      }
//  };
//  console.log(sumObjectValues(obj)); 
//  // Output: 6



// 105 Berilgan massiv ichidagi elementlarni n qadamga chapga siljiting.

// function rotateArrayLeft(arr, n) {
//     for (let i = 0; i < n; i++) {
//         arr.push(arr.shift())
        
//     }
//     return arr
// }

// // Test case
// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); 
// // Output: [3, 4, 5, 1, 2]



// 106. Berilgan satr ichidagi barcha raqamlarni olib tashlang.

// function removeDigits(str) {
//     let arr = str.split("")
//     let st = ""

//     for(let item of arr) {
//         if (isNaN(item)) {
//             st += item
//         }
//     }
//     return st
// }

// // Test case
// console.log(removeDigits("abc123def456")); 
// // Output: "abcdef"



// 107. Berilgan massivdan faqat toq indekslaridagi elementlarni qaytaring

// function oddIndexedElements(arr) {
//     return arr.filter(ind => ind % 2 == 0)
// }

// // Test case
// console.log(oddIndexedElements([1, 2, 3, 4, 5, 6])); 
// // Output: [2, 4, 6]



// 108. Berilgan ob'ekt ichidagi barcha son qiymatlarni ikki baravar oshiring

// function doubleValues(obj) {
//     let arr = [{value: obj, step: 1}]
//         let result = []
//         for (let i = 0; i < arr.length; i++) {
//             const {value, step} = arr[i]
//             for(let key in value) {
//                 if (typeof value[key] === "object") {
//                     arr.push({value: value[key], step: step + 1})
//                 }else {
//                     value[key] = value[key] * 2
//                 }
//             } 
//         }
//         return obj 
//  }
 
//  // Test case
//  const obj = {
//      a: 1,
//      b: {
//          c: 2,
//          d: {
//              e: 3
//          }
//      }
//  };
//  console.log(doubleValues(obj)); 
//  // Output: { a: 2, b: { c: 4, d: { e: 6 } } }



// 109. Berilgan ob'ekt ichidagi kalit-qiymat juftliklarini arrayga aylantiring.

// function objectToArray(obj) {
//     let arr = Object.entries(obj)
//     return arr
// }

// // Test case
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(objectToArray(obj)); 
// // Output: [["a", 1], ["b", 2], ["c", 3]]



// 110. Berilgan ob'ekt ichidagi barcha kalitlarni ularning qiymati bo'yicha tartiblang.

// function sortKeysByValue(obj) {
//     let sortedVal = Object.entries(obj).sort((a, b) => a[1] - b[1]);

//     let newObj = {}
//     sortedVal.forEach(([key, val]) => {
//         newObj[key] = val
//     })
//     return newObj
// }

// // Test case
// const obj = {
//     a: 3,
//     b: 1,
//     c: 2
// };
// console.log(sortKeysByValue(obj)); 
// // Output: { b: 1, c: 2, a: 3 }