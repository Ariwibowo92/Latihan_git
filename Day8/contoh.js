function tampilkan() {
    console.log("halo!");
  }
  
  tampilkan();
  /* 1
  */
  
  function munculkanAngkaDua() {
    return 2
  }
  
  var tampung = munculkanAngkaDua();
  console.log(tampung)
  /* 2
  */
  
  
  function kalikanDua(angka) {
    return angka * 2
  }
  
  var tampung = kalikanDua(2);
  console.log(tampung)
  
  
  function tampilkanAngka(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
  }
  
  console.log(tampilkanAngka(5,3))
  
  
  function tampilkanAngka(angka = 1) {
    return angka
  }
  
  console.log(tampilkanAngka(5)) 
  console.log(tampilkanAngka())
