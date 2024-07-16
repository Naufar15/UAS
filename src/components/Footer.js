// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              &copy; 2024 Website Penyebab dan Penanggulangan Bencana Tsunami di
              Indonesia
            </p>
          </div>
          <div className="col">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
