# Program Checkout Sederhana

Program ini merupakan simulasi proses checkout sederhana menggunakan
JavaScript. Program menghitung subtotal, diskon member, ongkos kirim,
dan total pembayaran berdasarkan harga produk, jumlah produk, serta
status keanggotaan.

## Fitur

-   Memvalidasi harga produk agar berupa angka dan lebih dari 0.
-   Memvalidasi jumlah produk agar berupa bilangan bulat dan lebih dari
    0.
-   Menghitung subtotal berdasarkan harga dan jumlah produk.
-   Memberikan diskon 10% jika pelanggan berstatus member.
-   Menambahkan ongkos kirim sebesar Rp15.000 jika total setelah diskon
    kurang dari Rp250.000.
-   Menampilkan total pembayaran melalui `console.log()`.

## Variabel

  ------------------------------------------------------------------------
  Variabel                                Nilai awal Keterangan
  --------------------- ---------------------------- ---------------------
  `HargaProduk`                             `300000` Harga satu produk

  `JumlahProduk`                                 `1` Jumlah produk yang
                                                     dibeli

  `IsMember`                                 `false` Status keanggotaan
                                                     pelanggan (`true`
                                                     atau `false`)
  ------------------------------------------------------------------------

## Alur Perhitungan

1.  Program memeriksa apakah `HargaProduk` berupa angka dan lebih dari
    0.

2.  Program memeriksa apakah `JumlahProduk` merupakan bilangan bulat dan
    lebih dari 0.

3.  Jika validasi berhasil, program menghitung subtotal:

    `subTotal = HargaProduk * JumlahProduk`

4.  Program menghitung nilai diskon sebesar 10% dari subtotal:

    `diskon = subTotal * 0.10`

5.  Diskon diterapkan hanya jika `IsMember` bernilai `true`:

    `Didiskon = subTotal - (diskon * IsMember)`

6.  Ongkos kirim sebesar Rp15.000 dikenakan jika `Didiskon` kurang dari
    Rp250.000. Jika tidak, ongkos kirim adalah Rp0.

7.  Program menjumlahkan nilai setelah diskon dan ongkos kirim untuk
    memperoleh total pembayaran.

## Contoh Hasil

Dengan nilai awal pada kode:

-   Harga produk: Rp300.000
-   Jumlah produk: 1
-   Status member: bukan member (`false`)
-   Subtotal: Rp300.000
-   Diskon: Rp0
-   Ongkos kirim: Rp0
-   **Total pembayaran: Rp300.000**

Jika status member diubah menjadi `true`, diskon 10% akan diterapkan.
Dengan subtotal Rp300.000, total setelah diskon menjadi Rp270.000.
Karena nilainya masih tidak kurang dari Rp250.000, ongkos kirim tetap
Rp0.

## Cara Menjalankan

1.  Pastikan Node.js sudah terpasang di komputer.

2.  Simpan kode program dalam file bernama `checkout.js`.

3.  Buka terminal pada folder tempat file disimpan.

4.  Jalankan perintah berikut:

    ``` bash
    node checkout.js
    ```

5.  Hasil total pembayaran akan ditampilkan di terminal.

## Catatan

-   `IsMember` harus menggunakan nilai boolean `true` atau `false`.
-   Jika harga atau jumlah produk tidak memenuhi validasi, blok
    perhitungan tidak dijalankan dan program tidak menampilkan hasil.
-   Program ini merupakan contoh sederhana dan belum mencakup input dari
    pengguna maupun format tampilan mata uang.

## Penggunakan AI

-   Saya menggunakan AI untuk mencari tahu bagaimana caranya memvalidasi harga dan jumlah 
-   untuk memngetahui sintax dan cara kerjanya
-   valid && (() => { })(); digunakan untuk memvalidasi const valid
