// src/pages/Home.js
import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/App.css"; // Pastikan untuk mengimpor file CSS di sini

const Home = () => {
  return (
    <Container className="mt-4">
      <div className="welcome-header">
        <h2>
          Selamat Datang di Website Penyebab dan Penanggulangan Bencana Tsunami
          di Indonesia
        </h2>
        <p className="subtext">
          Temukan informasi terbaru tentang penyebab, mitigasi, dan dampak
          bencana tsunami di Indonesia.
        </p>
        {/* Tambahkan tombol Edukasi di sini */}
        <Link to="/edukasi">
          <Button variant="primary" className="gradient-button">
            Edukasi Tsunami
          </Button>
        </Link>
      </div>
      <h3 className="section-title mt-4 mb-4">
        <span className="title-text">Artikel Terbaru</span>
        <hr className="blue-line" />
      </h3>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://siagabencana.com/wp-content/uploads/2024/07/SPAB-MPLS-SMAN57-42.jpg"
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Title>
                <strong>
                  Edukasi Kesiapsiagaan Bencana untuk Siswa Baru SMAN 57 Jakarta
                  Melalui Kegiatan MPLS
                </strong>
              </Card.Title>
              <Card.Text>
                Kegiatan masa perkenalan lingkungan sekolah tahun ajaran baru
                telah terlaksana di SMA Negeri 57 Jakarta pada Rabu (10/07/24).
                Kegiatan dihadiri oleh Direktorat Kesiapsiagaan…
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://siagabencana.com/wp-content/uploads/2024/06/subur_rojinawi.jpeg"
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Title>
                <strong>
                  Sosialisasi Kesiapsiagaan Bencana Diikuti Ratusan Relawan
                  Kemanusiaan dan Penanggulangan Bencana
                </strong>
              </Card.Title>
              <Card.Text>
                Minggu (2/6/24), Baraya Care yang didukung oleh Squad
                Penanggulangan Bencana, Human Initiativve, Zakat Sukses, BNPB
                dan beberapa lembaga lainnya menggelar kegiatan bertajuk
                Sosialisasi…
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://siagabencana.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-04-at-6.25.26-AM-300x169.jpeg"
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Title>
                <strong>
                  Upaya Membangun Masyakarat Sadar Bencana Melalui IDA CAMP #5
                </strong>
              </Card.Title>
              <Card.Text>
                Senin (1/4/24), kegiatan Kemah Adaptasi Bencana (IDA CAMP) #5
                yang diselenggerakan di Pangandaran, Jawa Barat pada 1 – 4 April
                2024 ini resmi…
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://siagabencana.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-29-at-07.54.32-300x200.jpeg"
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Title>
                <strong>
                  Video Simulasi Gempa Bumi di Sumedang Viral di Masyarakat
                </strong>
              </Card.Title>
              <Card.Text>
                Video berisikan suasana evakuasi mandiri dengan skenario bencana
                gempabumi di sebuah pesantren, viral di media sosial. Video
                tersebut beredar melalui sosial media WhatsApp dan beberapa…
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://siagabencana.com/wp-content/uploads/2023/12/pameran_1-300x200.jpg"
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Title>
                <strong>
                  Aksesibilitas dan Inovasi dalam Situasi Bencana Lewat Pameran
                  Demo Day dan Simposium IDEAKSI
                </strong>
              </Card.Title>
              <Card.Text>
                Acara yang digagas oleh YAKKUM Emergency Unit (YEU) yang
                bekerjasama dengan Universitas Gadjah Mada Falkutas Psikologi
                yang diselenggarakan hari Sabtu (07/10/23), tidak hanya sekadar
                pada….
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://siagabencana.com/wp-content/uploads/2023/11/simposium_2-300x200.jpg"
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Title>
                <strong>
                  Peran Kepemimpinan Masyarakat dalam Simposium IDEAKSI
                </strong>
              </Card.Title>
              <Card.Text>
                Demo Day dan Simposium IDEAKSI yang diselenggarakan pada 07
                Oktober 2023 di Daerah Istimewa Yogyakarta ini menghadirkan 15
                peserta yang mempresentasikan karyanya. Walaupun dengan jumlah…
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" block>
            Baca Berita Lainnya
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
