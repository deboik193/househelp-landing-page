import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import styles from "../styles/components/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//====================================================
//
//====================================================
export default class FooterComponent extends React.Component {
  render() {
    let pages: string[] = ["About", "Features", "Works", "Support"];
    let socialLinksData: object[] = [
      {
        links: "https://twitter.com",
        icon: (
          <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
        ),
      },
      {
        links: "https://facebook.com",
        icon: (
          <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
        ),
      },
      {
        links: "https://instagram.com",
        icon: (
          <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
        ),
      },
    ];
    return (
      <footer className={styles.footer}>
        <section className={styles.topFooter}>
          <b>
            Ready to grow your business? Start with Apex, become faster every
            second
          </b>
          <button>Start Chatting Now</button>
          <div className={styles.row}>
            <Image src={logo} alt="Website Logo" className={styles.image} />
            <ul>
              {pages.map((val, i) => {
                return <li key={i}>{val}</li>;
              })}
            </ul>
            <span className={styles.socialLinks}>
              {socialLinksData.map((val, i) => {
                return (
                  <Link key={i} href={val["links"]}>
                    {val["icon"]}
                  </Link>
                );
              })}
            </span>
          </div>
        </section>
        <section className={styles.bottomFooter}>
          <span>© Copyright 2022, All Rights Reserved</span>
          <div className={styles.row}>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </section>
      </footer>
    );
  }
}
