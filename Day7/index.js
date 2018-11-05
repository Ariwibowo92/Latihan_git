var name = "gana";
var age = 18;
var money = 400000;

if (name) {
    if (age <= 17){
        var hargaJuice = 50000;
        if (money < hargaJuice){
            console.log("Uang tidak cukup. Anda harus pulang")
        } else {
            var sisaUang = money - hargaJuice;
            console.log("Anda bisa pesan minuman. Sisa uang anda"+sisaUang)
        }  
    } else {
        var hargaAnggur = 300000; 
        if (money < hargaAnggur){
            console.log("Uang tidak cukup. Anda harus pulang")
        } else{
            var sisaUang = money - hargaAnggur;
            console.log("Anda bisa pesan minuman. Sisah uang anda"+sisaUang)
        }
    }
} else {
    console.log("anda tidak boleh masuk")
}
