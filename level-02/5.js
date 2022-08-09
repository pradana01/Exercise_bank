/**
 * Kalian diminta untuk membantu sekolah dalam menilai pekerjaan siswa-siswanya.
 * Di sini kalian mendapatkan 2 parameter yang answers (jawaban siswa) dan key (kunci jawaban).
 * Length dari answers dan key selalu sama yaitu 20.
 * Untuk setiap jawaban yang benar, poin bertambah sebanyak 10
 * Untuk setiap jawaban yang salah, poin akan berkurang sebanyak 5
 * Untuk setiap jawaban yang tidak ada isinya, tidak ada pengurangan atau penambahan poin
 * Setelah kalian mendapatkan total poin, hitunglah nilai mereka dengan rumus:
 * ((total nilai yang didapat)/(total nilai yang bisa diraih))*100
 * note: hasilnya persetage
 * 
 * expected output:
 * `Siswa ini mendapatkan nilai <persentase nilai>%`
 * 
 */


function checkAnswers(answers, key) {
    
}

let user1 = [
    ['', 'b', '', ''],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', '', '', 'd'],
    ['', '', '', 'd'],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', 'c', ''],
    ['a', '', '', ''],
    ['', '', '', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['a', '', '', ''],
]

let key1 = [
    ['', 'b', '', ''],
    ['', '', 'c', ''],
    ['', '', '', 'd'],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['', '', 'c', ''],
    ['', '', '', 'd'],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['a', '', '', ''],
    ['', '', '', 'd'],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['', '', 'c', ''],
]
console.log(user1.length)

console.log(checkAnswers(user1, key1))