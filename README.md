BACA dan SIMPAN "1. Celcius; 2.Reamur; 3.Farenheit; 4. Kelvin : 'pilih suhu' "
FUNCTION celcius
  BACA dan SIMPAN "1. Celcius ke Reamur 2. Celcius ke Farenheit 3. Celcius ke Kelvin : 'pilih jenis konversi' "
  BACA dan SIMPAN "Celcius"
  IF 'pilih jenis konversi' adalah 1 :
    'suhu' adalah Reamur
    HITUNG (4/5) * 'celcius'
  ELSE IF 'pilih jenis konversi' adalah 2 :
    'suhu' adalah Farenheit
     HITUNG (9/5) * 'celcius' + 32
  ELSE
     'suhu' adalah Kelvin
     HITUNG 'celcius' + 237
  ENDIF
  TULISKAN "konversi suhu dari celcius ke 'suhu' "
  TULISKAN "nilai celcius = 'celcius' "
  TULISKAN "hasil 'suhu' = 'hasil' "
ENDFUNCTION
FUNCTION reamur
  BACA dan SIMPAN "1.Reamur Ke Celcius 2. Reamur ke Farenheit 3. Reamur ke Kelvin : 'pilih jenis konversi' "
  BACA dan SIMPAN "reamur"
  IF 'pilih jenis konversi' adalah 1 :
    'suhu' adalah Celcius
    HITUNG (5/4) * 'reamur'
  ELSE IF 'pilih jenis konversi' adalah 2 :
    'suhu' adalah Farenheit
     HITUNG (9/4) * 'reamur' + 32
  ELSE
     'suhu' adalah Kelvin
     HITUNG (5/4) * 'reamur' + 237
  ENDIF
  TULISKAN "konversi suhu dari reamur ke 'suhu' "
  TULISKAN "nilai reamur = 'reamur' "
  TULISKAN "hasil 'suhu' = 'hasil' "
ENDFUNCTION
FUNCTION farenheit
  BACA dan SIMPAN "1.Farenheit ke Celcius 2.Farenheit ke Reamur 3.Farenheit ke Kelvin : 'pilih jenis konversi' "
  BACA dan SIMPAN "farenheit"
  IF 'pilih jenis konversi' adalah 1 :
    'suhu' adalah Celcius
    HITUNG 5/9 * ('farenheit' - 32)
  ELSE IF 'pilih jenis konversi' adalah 2 :
    'suhu' adalah Reamur
     HITUNG 4/9 * ('farenheit' - 32)
  ELSE
     'suhu' adalah Kelvin
     HITUNG 5/9 * ('farenheit' - 32) + 237
  ENDIF
  TULISKAN "konversi suhu dari farenheit ke 'suhu' "
  TULISKAN "nilai farenheit = 'farenheit' "
  TULISKAN "hasil 'suhu' = 'hasil' "
ENDFUNCTION
FUNCTION kelvin
  BACA dan SIMPAN "1.Kelvin ke Celcius 2.Kelvin ke Reamur 3.Kelvin ke Farenheit' : 'pilih jenis konversi' "
  BACA dan SIMPAN "kelvin"
  IF 'pilih jenis konversi' adalah 1 :
    'suhu' adalah Celcius
    HITUNG 'kelvin' - 273
  ELSE IF 'pilih jenis konversi' adalah 2 :
    'suhu' adalah Reamur
     HITUNG 4/5 * ('kelvin' - 273)
  ELSE
     'suhu' adalah Farenheit
     HITUNG 9/5 * ('kelvin' - 273) + 32
  ENDIF
  TULISKAN "konversi suhu dari kelvin ke 'suhu' "
  TULISKAN "nilai kelvin = 'kelvin' "
  TULISKAN "hasil 'suhu' = 'hasil' "
ENDFUNCTION
IF 'pilih suhu' adalah 1 :
  celcius()
ELSE IF 'pilih suhu' adalah 2 :
  reamur()
ELSE IF 'pilih suhu' adalah 3 :
  farenheit()
ELSE IF 'pilih suhu' adalah 4 :
  kelvin()
else
  tuliskan "salah input"
ENDIF
