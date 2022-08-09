/**
 * Kamu diminta untuk membantu toko musik memberikan musik-musik yang sesuai dengan genre yang diberikan oleh user.
 * Perhatikan tiap test case untuk mendapatkan semuan semua hasil yang diinginkan
 */


function musicStore(genres) {
    let dbMusic = [
        ["metal", "dream theater", "deadsquad", "avantasia"],
        ["jazz", "t-square", "snarky puppy", "cassiopea"],
        ["rock", "guns and roses", "rolling stones", "van halen"],
        ["pop", "peterpants", "armedi", "es teh dua gelas"]
    ]

}



function getMusic(user) {
    
}

let person = {
    name: "Andrean",
    genres: "metal,jazz"
}
console.log(getMusic(person))
// [
//     ["metal", "dream theater", "deadsquad", "avantasia"],
//     ["rock", "guns and roses", "rolling stones", "van halen"]
// ]

console.log(getMusic({
    name: "unknown",
    genres: "dangdut"
})) // no this kind of music available in this holy place


console.log(getMusic()) // invalid input
