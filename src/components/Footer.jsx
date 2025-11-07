import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { BsFillCupHotFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#FDFAEF]">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <div className="logo ">
              <p className="text-[18px]">DVicious</p>
              <BsFillCupHotFill size={20} />
              <p className="text-[18px]">Brew</p>
            </div>
            <h2 className="footer-title ">Brewed to perfection.</h2>

            <div className="footer-section">
              <h4>Opening hours:</h4>
              <p>Mon - Thu: 11:00 AM - 9:00 PM</p>
              <p>Fri - Sat: 11:00 AM - 10:00 PM</p>
              <p>Sun: 12:00 PM - 8:00 PM</p>
            </div>

            <div className="footer-section">
              <h4>Phone:</h4>
              <p>+91 7777048666</p>
            </div>

            <div className="footer-section">
              <h4>Location:</h4>
              <p>Coffee Heaven</p>
              <p>GCET</p>
              <p>Noida, India</p>
            </div>

            <div className="social-icons">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.9922385864443!2d77.49522507535166!3d28.45713287576099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce565f0000001%3A0x548952c90b21eae1!2sGCET!5e1!3m2!1sen!2sin!4v1762527985658!5m2!1sen!2sin"
              width="100%"
              height="490"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 — DViciousBrew@nk10nikhil</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
