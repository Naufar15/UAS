// src/pages/Edukasi.js
import React from "react";
import { Container } from "react-bootstrap";

const Edukasi = () => {
  return (
    <Container className="mt-4 text-center">
      <h2>Selamat Datang di Halaman Edukasi</h2>
      <p>
        Di sini Anda dapat menemukan berbagai informasi edukasi tentang
        penanggulangan bencana tsunami di Indonesia.
      </p>
      {/* Gambar menggunakan URL eksternal */}
      <img
        src="https://m.media-amazon.com/images/I/71A9hoEcVOL.jpg"
        alt="Pengertian Bencana Tsunami"
        className="center-image"
      />
      <p className="image-caption mt-2">Pengertian Bencana Tsunami</p>
      <p>
        Tsunami berasal dari bahasa Japan, yang berarti “Tsu” artinya pelabuhan
        dan “Nami” artinya gelombang. Nama ini diperkirakan berasal dari para
        nelayan Japan. Lalu, mengapa bencana tsunami bisa terjadi? Bencana
        tsunami terjadi akibat dari adanya aktivitas gempa di bawah laut,
        longsor bawah laut, aktivitas gunung merapi bawah laut, jatuhnya
        material-material besar menuju laut dan jatuhnya mateor. Aktivitas
        itulah yang menyebabkan terjadinya gelombang besar di laut dan menuju ke
        pantai. Gelombang tersebut bisa mencapai kecepatan 600-900 km/jam.
        Umumnya gelombang ini tidak begitu besar ketika berada di laut lepas
        hanya memiliki amplitude sebesar 30-60 cm. Namun akan semakin membesar
        dan cepat ketika menuju laut dangkal sampai kepinggir pantai. Bencana
        tsunami yang terjadi umumnya disebabkan karena aktivitas gempa bawah
        laut atau gempa tektonik dengan kekuatan 7.0 Manitudo atau lebih.{" "}
        <br></br>
        Salah satu bencana tsunami yang disebabkan karena aktivitas gempa bawah
        laut adalah tsunami Aceh dan Palu. Cara mendeteksi tsunami yang
        diakibatkan oleh gempa bawah laut atau gempa tektonik ini sebenarnya
        cukup mudah. <br></br>Pertama, deteksi gempa, yaitu ketika kamu
        merasakan gempa dengan kekuatan yang cukup besar. Kedua, setelah gempa
        terjadi, maka air laut tiba-tiba surut. Ketika terjadi ciri-ciri seperti
        itu, mulailah mengevakuasi diri. <br></br>Terjadinya tsunami karena
        beberapa kejadian bawah laut seperti gempa bawah laut, longsor dasar
        laut, jatuhnya material besar ke dalam laut dan jatuhnya meteor ke laut.
        Semua kejadian tersebut menyebabkan perubahan gelombang di laut. Pemicu
        paling umum yang menyebabkan tsunami adalah gempa, yaitu sekitar 80-90%
        dari keseluruhan penyebab tsunami. <br></br>Berikut merupakan
        penyebab-penyebab terjadinya tsunami. Gempa Bawah Laut Gempa yang
        menyebabkan tsunami umumnya gempa yang terjadi di daerah penujaman atau
        pertemuan dua buah lempeng yang menujamkan salah satu lempeng ke bawah
        permukaan laut. Dan penyebab tsunami akibat dari gempa masih bisa
        dideteksi secara dini, atau kamu dapat mengunduh aplikasi android milik
        Info BMKG. <br></br>Longsor Dasar Laut Longsor yang terjadi di dasar
        laut menyebabkan terganggunya aktivitas air dan memicu terjadinya
        gelombang tsunami. Longsoran dasar laut terjadi akibat dari gempa dasar
        laut dan longsoran ini memperparah dampak dari tsunami nantinya.
        Jatuhnya Material Besar ke Dalam Laut Material yang dimaksud adalah
        material yang masih berasal dari bumi. <br></br>Apakah kamu masih ingat
        dengan gempa yang menimpa Selat Sunda pada akhir tahun 2018? Gempa
        tersebut diakibatkan oleh jatuhnya material-material Gunung Anak
        Krakatau ke dalam laut dan menyebabkan tsunami. Jatuhnya Meteor atau
        Benda Luar Angkasa ke Laut Penyebab tsunami yang satu ini adalah salah
        satu penyebab tsunami yang langka. Penyebab tsunami ini disebabkan
        karena jatuhnya meteor ke dalam laut dan menyebabkan gelombang tsunami.
        Kejadian ini salah satu yang memusnahkan era Dinosaurus.
      </p>
    </Container>
  );
};

export default Edukasi;
