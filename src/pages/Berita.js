// src/pages/Berita.js
import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "../styles/App.css"; // Pastikan untuk mengimpor file CSS di sini

const Berita = () => {
  return (
    <Container className="mt-4">
      <h3 className="section-title mt-4 mb-4">
        <span className="title-text">Artikel Berita</span>
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
                Kegiatan dihadiri oleh Direktorat Kesiapsiagaan….
              </Card.Text>
              <Button variant="primary">Baca Selengkapnya</Button>
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
                Sosialisasi.
              </Card.Text>
              <Button variant="primary">Baca Selengkapnya</Button>
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
                2024 ini resmi….
              </Card.Text>
              <Button variant="primary">Baca Selengkapnya</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Berita;
