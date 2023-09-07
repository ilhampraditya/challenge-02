function getTotalPenjualan(dataPenjualan) {
  // Validasi apakah dataPenjualan adalah array
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Data penjualan harus berupa array");
  }

  let totalPenjualan = 0;

  // Iterasi melalui setiap objek dalam array dataPenjualan
  for (let i = 0; i < dataPenjualan.length; i++) {
    const penjualan = dataPenjualan[i];

    // Validasi apakah objek memiliki properti totalTerjual dan tipe datanya adalah number
    if (typeof penjualan.totalTerjual === "number") {
      totalPenjualan += penjualan.totalTerjual;
    } else {
      throw new Error(
        "Properti totalTerjual harus berupa angka untuk semua objek dalam data penjualan"
      );
    }
  }

  return totalPenjualan;
}

const dataPenjualanPakALdi = [
  {
    namaProduct: "sepatu futsal Nike vapor academy 8",
    hargaSatuan: 760808,
    kategori: "sepatu sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "sepatu warior tristan black brown high - original",
    hargaSatuan: 960808,
    kategori: "sepatu sneakers",
    totalTerjual: 37,
  },
  {
    namaProduct: "sepatu warrior tristan maroon high - original",
    kategori: "sepatu sneakers",
    hargaSatuan: 360808,
    totalTerjual: 90,
  },
  {
    namaProduct: "sepatu warior rainbow tosca corduroy - [BNIB] original",
    hargaSatuan: 120808,
    kategori: "sepatu sneakers",
    totalTerjual: 90,
  },
];

console.log(getTotalPenjualan(dataPenjualanPakALdi)); // Output: 307
