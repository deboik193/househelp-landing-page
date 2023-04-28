import React from "react";
import Image from "next/image";
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
    let pages: string[] = ["Demos", "About", "Blog", "Pages", "Contact"];
    function showMenu() {
      alert("f");
    }
    return (
      <header className={styles.header}>
        <Image src={logo} alt="Website Logo" className={styles.image} />
        <div className={styles.memu}>
          <div className="spacer"></div>
          <ul>
            {pages.map((val, i) => {
              return <li key={i}>{val}</li>;
            })}
          </ul>
          <div className={styles.regCon}>
            <span>Login</span>
            <button>Get Started Free</button>
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
