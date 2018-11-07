/*
print angka 1-100
jika angka ganjil print "Angka Ganji = {angka}"
jika angka genap print "Angka Genap ={angka}"
*/


for (var i = 1; i <=100; i++){
  if (i % 2 === 0) console.log("Angka Genap" + i) 
  else console.log("Angka ganjil" + 1);
}

/* Print angka 3-30
Jika angka habis dibagi 3 print "HACK{angka}"
Jika angka habis dibagi 6 print "FOX={angka}"
Jika angka habis dibagi 15 print "HACKFOX={angka}"
*/


var i = 0
 while(i < 30) {
  i += 3;
  if(i%15 === 0) {
    console.log("HACKFOX = " + i)
  } else if(i%6 === 0) {
    console.log("FOX = " + i)
  } else if(i%3 === 0) {
    console.log("HACK = " + i)
  }
}

/*Print angka 1-100 bilangan prima

STORE ANGKA WITH VALUE 2
Looping angka -100
Store is prime with value true
Store num with value 2
looping num < angka 
IF angka % num =0
isPrime true
Print angka */