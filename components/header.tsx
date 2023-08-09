import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarComponent from "./navbar";
import logo from "../assets/images/logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//====================================================
//
//====================================================
export default class HeaderComponent extends React.Component {
  render() {
    let showNavbar: boolean = false;
    let pages: object[] = [{ title: "Become a Help", link: "https://househelp.onrender.com" }, { title: "Why Us", link: "/about-us" }, { title: "Contact", link: "/contact" }];
    function showMenu() {
      alert("f");
    }
    return (
      <header className={styles.header}>
        <Link href={'/'}>
          <Image src={logo} alt="Website Logo" className={styles.image} />
        </Link>
        <div className={styles.memu}>
          <div className="spacer"></div>
          <ul>
            {pages.map((val, i) => {
              return <Link key={i} href={val["link"]}><li>{val["title"]}</li></Link>;
            })}
          </ul>
          <div className={styles.regCon}>
            <Link target="_blank" href={'https://househelp.onrender.com'}>
              <span>Login</span>
            </Link>
            <Link target="_blank" href={'https://househelp.onrender.com/register'}>
              <button className="text-white">Get Started Free</button>
            </Link>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          onClick={showMenu}
          className={styles.menuIcon}
        />
        {showNavbar ? <NavbarComponent /> : <></>}
      </header>
    );
  }
}
