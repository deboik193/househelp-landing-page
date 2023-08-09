import React, { useEffect } from "react";
import Image from "next/image";
import NavbarComponent from "./navbar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//====================================================
//
//====================================================
export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount(): void {
    fetch('')
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    let pages: string[] = ["category 1", "category 2", "category 3", "category 4", "category 5", "category 6", "category 7"];

    return (
      <header className={`${styles.header} mt-4`}>
        <div className={styles.memu}>
          <ul>
            {pages.map((val, i) => {
              return <li key={i}>{val}</li>;
            })}
          </ul>
        </div>
      </header>
    );
  }
}
