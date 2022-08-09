/**
 * Kelompokkan paket-paket sesuai dengan kode pengirimannya.
 * Kalian akan mendapatkan 1 parameter berupa array of strings (lihat contoh di bawah).
 * ['budi-CGK', 'bella-SRG']
 * Perhatikan pada string tersebut kita mendapatkan nama penerima dan tujuannya.
 * 
 * List tujuan adalah sebagai berikut
 * 
 * | No | Kode Penerbangan | Nama Bandara    |
   |----|:----------------:|-----------------|
   | 1. |   CGK            |  Soekarno Hatta |
   | 2. |   SRG            |  Achmad Yani    |
   | 3. |   BDO            |  Husein S.      |
   | 4. |   JOG            |  Adisucipto     |
 * 

   Output yang diharapkan adalah sebagai berikut:
   {
    nama bandara: [array yang isinya nama-nama penerima]
   }
 */

function sendItAll(arr) {

}

let batch1 = ['budi-CGK', 'bella-SRG', 'john-CGK', 'sastro-JOG']
// {
//     CGK: ['budi', 'john'],
//     SRG: ['bella'],
//     JOG: ['sastro']
// }
console.log(sendItAll(batch1));

console.log(sendItAll()) // no batch detected