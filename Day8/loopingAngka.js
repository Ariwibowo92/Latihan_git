/* Soal Pertama
* buat fungsi dengan nama loopingAngka dengan nilai minimal
* sebagai parameter pertama dan nilai akhir sebagai parameter
* kedua. Contoh loopingAngka(5,9) menghasilkan 5,6,7,8,9. contoh kedua
*loopingAngka(17,28) menghasilkan  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 
*/

function loopingAngka(angka0=0, angka1=1){
    while(angka0 <= angka1){
        console.log(angka0);
        angka0++
    }
}   
loopingAngka(5,9)
loopingAngka(17,28)  

/*
*Soal Kedua
*lanjutkan soal pertama keluarkan ganjil dan genap
*/
