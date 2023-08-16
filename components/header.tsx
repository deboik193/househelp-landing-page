import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarComponent from "./navbar";
import logo from "../assets/images/logo.png";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOnClickOutside } from 'usehooks-ts'

//====================================================
//
//====================================================
export default class HeaderComponent extends React.Component {
  render() {
    let showNavbar: boolean = false;
    let pages: object[] = [{ title: "Become a Help", link: "https://househelp.onrender.com" }, { title: "Why Us", link: "/about-us" }, { title: "Contact", link: "/contact" }];

    function showMenu() {
      const sidebar = document.querySelector('.sidebar');
      const navbar = document.querySelector('.navbar');
      sidebar.classList.toggle('hidden')
      navbar.classList.toggle('hidden')
    }
    
    return (
      <header className={styles.header}>
        <Link href={'/'} onClick={showMenu}>
          <Image src={logo} alt="Website Logo" className={styles.image} />
        </Link>
        <div className={`${styles.memu} sm:flex hidden sm:relative absolute sm:z-0 z-20 navbar  left-32 sm:top-0 sm:left-0 top-14 space-y-10 sm:space-y-0`}>
          <div className="spacer"></div>
          <ul className="block sm:flex sm:w-auto w-36">
            {pages.map((val, i) => {
              return <Link key={i} href={val["link"]} onClick={showMenu}><li>{val["title"]}</li></Link>;
            })}
          </ul>
          <div className={`${styles.regCon} sm:flex-none flex sm:flex-row flex-col space-y-8 sm:space-y-0`}>
            <Link target="_blank" href={'https://househelp.onrender.com'}>
              <span className="">Login</span>
            </Link>
            <Link target="_blank" href={'https://househelp.onrender.com/register'}>
              <button className="text-white">Get Started Free</button>
            </Link>
          </div>
        </div>
        <section className="bg-white shadow-2xl fixed top-0 bottom-0 sidebar right-0 left-20 z-10 sm:hidden hidden bg-blend-multiply ">
          <FontAwesomeIcon
            icon={faClose}
            onClick={showMenu}
            className="font-bold text-3xl text-gray-200 m-8 cursor-pointer"
          />
        </section>
        <FontAwesomeIcon
          icon={faBars}
          onClick={showMenu}
          className="sm:hidden block cursor-pointer"
        />
        {showNavbar ? <NavbarComponent /> : <></>}
      </header>
    );
  }
}
