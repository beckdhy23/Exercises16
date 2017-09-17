//aplikasi Konversi Suhu

var suhu;
var hasil;

var pilihSuhu = prompt('1. Celcius; 2.Reamur; 3.Farenheit; 4. Kelvin');
var intPilihSuhu = parseInt(pilihSuhu);

function celcius () {
  var pilihan = prompt('1. Celcius ke Reamur 2. Celcius ke Farenheit 3. Celcius ke Kelvin');
  var c = prompt('Nilai Celcius : ');

  var intPilihan = parseInt(pilihan);
  var intc = parseInt(c);

  if (intPilihan === 1) {
    suhu = 'Reamur';
    hasil = (4/5) * intc;
  }
  else if (intPilihan === 2) {
    suhu = 'Farenheit';
    hasil = (9/5) * intc + 32;
  }
  else {
    suhu = 'Kelvin';
    hasil = intc + 273;
  }
  
  console.log('Konversi Suhu dari Celcius ke ' +suhu);
  console.log('Nilai Celcius = ' +intc);
  console.log('Hasil ' +suhu+ ' = ' +hasil);
}

function reamur () {
  var pilihan = prompt('1.Reamur Ke Celcius 2. Reamur ke Farenheit 3. Reamur ke Kelvin');
  var r = prompt('Nilai Reamur : ');

  var intPilihan = parseInt(pilihan);
  var intr = parseInt(r);

  if (intPilihan === 1) {
    suhu = 'Celcius';
    hasil = (5/4) * intr;
  }
  else if (intPilihan === 2) {
    suhu = 'Farenheit';
    hasil = (9/4) * intr + 32;
  }
  else {
    suhu = 'Kelvin';
    hasil =(5/4) * intr + 273;
  }
  
  console.log('Konversi Suhu dari Reamur ke ' +suhu);
  console.log('Nilai Reamur = ' +intr);
  console.log('Hasil ' +suhu+ ' = ' +hasil);
}

function farenheit () {
  var pilihan = prompt('1.Farenheit ke Celcius 2.Farenheit ke Reamur 3.Farenheit ke Kelvin');
  var k = prompt('Nilai Farenheit : ');

  var intPilihan = parseInt(pilihan);
  var intf = parseInt(k);

  if (intPilihan === 1) {
    suhu = 'Celcius';
    hasil = 5/9 * (intf-32);
  }
  else if (intPilihan === 2) {
    suhu = 'Reamour';
    hasil = 4/9 * (intf-32);
  }
  else {
    suhu = 'Kelvin';
    hasil = 5/9 * (intf-32) + 273;
  }
  
  console.log('Konversi Suhu dari Farenheit ke ' +suhu);
  console.log('Nilai Farenheit = ' +intf);
  console.log('Hasil ' +suhu+ ' = ' +hasil);
}

function kelvin () {
  var pilihan = prompt('1.Kelvin ke Celcius 2.Kelvin ke Reamur 3.Kelvin ke Farenheit');
  var k = prompt('Nilai Kelvin : ');

  var intPilihan = parseInt(pilihan);
  var intk = parseInt(k);

  if (intPilihan === 1) {
    suhu = 'Celcius';
    hasil = intk - 273;
  }
  else if (intPilihan === 2) {
    suhu = 'Reamour';
    hasil = 4/5 * (intk - 273);
  }
  else {
    suhu = 'Farenheit';
    hasil = 9/5 * (intk-273) + 32;
  }
  
  console.log('Konversi Suhu dari Kelvin ke ' +suhu);
  console.log('Nilai Kelvin = ' +intk)
  console.log('Hasil ' +suhu+ ' = ' +hasil);
}

if (intPilihSuhu === 1) {
 celcius(); 
}
else if (intPilihSuhu === 2) {
  reamur();
}
else if (intPilihSuhu === 3) {
  farenheit();
}
else if (intPilihSuhu === 4) {
  kelvin();
}
else {
  console.log('salah input');
}