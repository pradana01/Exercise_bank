/**
 * Pada tugas ini kalian diminta untuk menghitung berapa poin yang didapatkan oleh student dan hadiah apa saja yang bisa dia dapatkan pada suatu sekolah.
 * Poin didapatkan dengan mengerjakan challenge, exam dan rocket.
 * Di sini kalian akan mendapatkan 3 function
 * 
 * 1. Function schoolThingy
 *   - adalah function utama yang akan menghasilkan object student dengan properti nama, total point, recommended prizes
 * 2. Function getRewards
 *   - adalah function yang akan menghasilkan rekomendasi hadiah yang dapat diambil student DIMULAI DARI YANG PALING MAHAL
 * 3. Function getPoints
 *   - adalah function yang akan menghitung berapa poin yang dimiliki oleh student
 */

function getPoints(doneList) {
    let tasks = {
        challenge: 200,
        exam: 750,
        rocket: 100
    };


};

function getRewards() {
    let prizes = [
        [1000, "tempat pensil", "1 pak pulpen", "canvas kecil"],
        [3000, "novel angels and demons", "novel harry potter"],
        [6000, "free lunch for 1 week voucher"]
    ];


};

function schoolThingy() {

}

console.log(schoolThingy({
    name: "Skyler",
    tasks: [
        "challenge-001",
        "challenge-002",
        "challenge-003",
        "exam-04",
    ]
}))

// {
//     name: "Skyler",
//     totalPoints: 1450,
//     recommendedPrizes: "tempat pensil"
// }
// Penjelasan kenapa cuma tempat pensil, karena poinnya tidak cukup untuk hadiah selanjutnya di kategori 1000


console.log(schoolThingy({
    name: "John",
    tasks: [
        "challenge-001",
        "challenge-002",
        "challenge-003",
        "exam-04",
        "challenge-004",
        "challenge-005",
        "challenge-006",
        "challenge-007",
        "rocket-001"
    ]
}))
