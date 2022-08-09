/**
 * Kalian diminta untuk membentuk array multidimensi dari parameter str. Limit adalah batas elemen pada inner array.
 * Sebagai contoh:
 * let limit = 3
 * str = abcdefg
 * output:
 * [
 *     [a,b,c],
 *     [d,e,f],
 *     [g]
 * ]
 */

function stackMe (str, limit) {
    
}

console.log(stackMe('abcdef', 3))
// [
//     [a,b,c],
//     [d,e,f]
// ]
console.log(stackMe('abcde', 2))
// [
//     [a,b],
//     [c,d],
//     [e]
// ]
console.log(stackMe('abcdefg', 3))
// [
//     [a,b,c],
//     [d,e,f],
//     [g]
// ]