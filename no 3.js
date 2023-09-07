function getAngkaTerbesarKedua(dataNumbers) {
  // Validasi tipe data parameter
  if (!Array.isArray(dataNumbers)) {
    return "Error: Invalid data type";
  }

  // Menginisialisasi dua variabel untuk angka terbesar dan angka terbesar kedua
  let angkaTerbesar = -Infinity;
  let angkaTerbesarKedua = -Infinity;

  // Iterasi melalui array untuk mencari angka terbesar dan angka terbesar kedua
  for (let i = 0; i < dataNumbers.length; i++) {
    const currentNumber = dataNumbers[i];

    if (currentNumber > angkaTerbesar) {
      angkaTerbesarKedua = angkaTerbesar;
      angkaTerbesar = currentNumber;
    } else if (
      currentNumber > angkaTerbesarKedua &&
      currentNumber < angkaTerbesar
    ) {
      angkaTerbesarKedua = currentNumber;
    }
  }

  // Memeriksa jika array memiliki setidaknya dua angka
  if (angkaTerbesarKedua === -Infinity) {
    return "Error: Array should have at least two distinct numbers";
  }

  // Mengembalikan angka terbesar kedua
  return angkaTerbesarKedua;
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka)); // Output: 8
console.log(getAngkaTerbesarKedua([0])); // Error: Array harus memiliki setidaknya dua nomor berbeda

console.log(getAngkaTerbesarKedua()); /* Error: Invalid data type, karena getAngkaTerbesarKedua dipanggil tanpa memberikan parameter 
atau parameter yang diberikan bukanlah sebuah array. Fungsi tersebut memerlukan satu parameter yang harus berupa array sebagai input.*/
