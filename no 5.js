function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(angka);
}

function getInfoPenjualan(dataPenjualan) {
  // Validasi apakah dataPenjualan adalah array
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Data penjualan harus berupa array");
  }

  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = "";
  let penulisTerlaris = "";
  let maxPenjualan = -1;

  for (let i = 0; i < dataPenjualan.length; i++) {
    const penjualan = dataPenjualan[i];

    // Validasi apakah properti yang dibutuhkan ada dan tipe datanya sesuai
    if (
      typeof penjualan.hargaBeli === "number" &&
      typeof penjualan.hargaJual === "number" &&
      typeof penjualan.totalTerjual === "number"
    ) {
      const modalPerProduk = penjualan.hargaBeli * penjualan.totalTerjual;
      const keuntunganPerProduk =
        (penjualan.hargaJual - penjualan.hargaBeli) * penjualan.totalTerjual;

      totalModal += modalPerProduk;
      totalKeuntungan += keuntunganPerProduk;

      // Menentukan produk buku terlaris
      if (penjualan.totalTerjual > maxPenjualan) {
        produkBukuTerlaris = penjualan.namaProduk;
        maxPenjualan = penjualan.totalTerjual;
      }

      // Menentukan penulis buku terlaris
      if (penjualan.totalTerjual === maxPenjualan) {
        if (!penulisTerlaris.includes(penjualan.penulis)) {
          penulisTerlaris += penjualan.penulis + ", ";
        }
      } else if (penjualan.totalTerjual > maxPenjualan) {
        penulisTerlaris = penjualan.penulis + ", ";
        maxPenjualan = penjualan.totalTerjual;
      }
    } else {
      throw new Error(
        "Properti hargaBeli, hargaJual, dan totalTerjual harus berupa angka untuk semua objek dalam data penjualan"
      );
    }
  }

  // Menghilangkan koma ekstra di akhir daftar penulis terlaris
  penulisTerlaris = penulisTerlaris.slice(0, -2);

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  return {
    totalKeuntungan: formatRupiah(totalKeuntungan),
    totalModal: formatRupiah(totalModal),
    persentaseKeuntungan: persentaseKeuntungan.toFixed(2) + "%",
    produkBukuTerlaris,
    penulisTerlaris,
  };
}

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

console.log(getInfoPenjualan(dataPenjualanNovel));
