function addProperty(arr) {

}

let arr1 = [
    ['tangan', 'manusia'],
    ['belalai', 'gajah'],
    ['gading', 'gajah'],
    ['kaki', 'manusia'],
    ['taring', 'macan'],
    ['paruh', 'burung'],
    ['cakar',  'macan'],
    ['sayap', 'burung']
]

console.log(addProperty(arr1)) 
// {
//     manusia: ['tangan', 'kaki'],
//     gajah: ['belalai', 'gading'],
//     macan: ['taring', 'cakar'],
//     burung: ['paruh', "sayap"]
// }