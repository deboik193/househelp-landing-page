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
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

//====================================================
//
//====================================================
export default class FooterComponent extends React.Component {
  render() {
    let pages: object[] = [{ title: "Become a Help", link: "/" }, { title: "Why Us", link: "/about-us" }, { title: "Contact", link: "/contact" }];
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
      < footer className={styles.footer} >
        <section className={styles.topFooter}>
          <b>
            Do you wish to speak with our customer support ?
          </b>
          <Link target="_blank" href={'https://api.whatsapp.com/send?phone=+2349125273293&text=Good day, my name is '}>
            <button className="flex items-center"><FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-3" /> Start Chatting Now</button>
          </Link>
          <div className={styles.row}>
            <Link href={'/'}>
              <Image src={logo} alt="Website Logo" className={styles.image} />
            </Link>
            <ul>
              {pages.map((val, i) => {
                return <Link key={i} href={val["link"]}><li>{val["title"]}</li></Link>;
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
          <span>© Copyright {new Date().getFullYear()}, All Rights Reserved</span>
          <div className={styles.row}>
            <Link href="/privacy"><span>Privacy Policy</span></Link>
            <Link href="/t&c"><span>Terms & Conditions</span></Link>
          </div>
        </section>
      </footer>
    );
  }
}
