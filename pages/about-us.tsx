import React from "react";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import clean from "../assets/images/cleaner.avif";
import family from "../assets/images/family.jpg";
import wheel from "../assets/images/wheel.webp";
import trust from "../assets/images/trust.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faStar,
  faPenToSquare,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <>
      <AboutComponent />
      <TrustIssuesComponent />
    </>
  );
}

//==========================================
// About us heading
//==========================================
export class AboutComponent extends React.Component {
  render() {
    return (
      <>
        <nav className="bg-[#03b10a] text-white pt-4 mt-4 h-96">
          <section className="lg:w-4/5 sm:w-11/12 sm:mx-auto">
            <aside className="grid grid-cols-2 py-4">
              <div className="w-2/3">
                <h1 className="font-black text-6xl mb-4">House Help</h1>
                <p className="text-xl">
                  Our system help to solve trust issues you may have regarding a house help, we had put neccessary tools together that will help you make a right choice of help.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Image src={clean} alt="cleaner image" className="border-solid border-2 w-72" />
                <Image src={family} alt="family image" className="border-solid border-2 w-56" />
                <Image src={clean} alt="Website Logo" className="border-solid border-2 w-40" />
                <Image src={wheel} alt="Website Logo" className="border-solid border-2 w-64" />
              </div>
            </aside>
          </section>
        </nav >
      </>
    );
  }
}

//==========================================
// INBOX SECTION COMPONENT
//==========================================
export class TrustIssuesComponent extends React.Component {
  render() {
    const pointsToChose: object = [
      { title: "Trust Issues", text: "Inviting someone into your home requires a level of trust, and there can be concerns about theft, misconduct, or confidentiality breaches."},
      { title: "Financial Costs", text: "Hiring house help can be expensive, as it involves salaries or wages, benefits, and potential legal responsibilities such as taxes and insurance."},
      { title: "Legal and Ethical Considerations", text: "Depending on your location, hiring house help might involve legal obligations, such as adhering to labor laws, obtaining work permits, and providing fair compensation."},
      { title: "Support for Working Parents", text: "House help can be especially beneficial for working parents, as it allows them to manage their careers while still maintaining a well-run household."},
    ]
    return (
      <section className={styles.inboxSection}>
        <Image src={trust} alt="helping elderly people" className={`${styles.img}`} />
        <div className={`${styles.column} space-y-8`}>
          <ul className="space-y-14">
            {pointsToChose.map((item, index) => (
              <li key={index}>
                <><FontAwesomeIcon icon={faArrowRight} className="text-2xl mr-3" /> <span className="text-xl font-bold">{item.title}</span></>
                <p className="mt-2 text-lg">{item.text}</p>
              </li>
            ))}
          </ul>

          <div className={styles.row}>
            <div className={styles.smCon}>
              <b>4.3K+</b>
              <span>
                Website’s <br /> Powering
              </span>
            </div>
            <div className={styles.smCon}>
              <b>7M+</b>
              <span>
                Chats in <br /> Last 2022
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
