import styles from "../styles/Index.module.css";
import Image, { StaticImageData } from "next/image";
import Head from 'next/head';
import womanVideo from "../assets/images/video.png";
import happyFamily from "../assets/images/helpandfamily.jpeg";
import supportSystem from "../assets/images/support.svg";
import family from "../assets/images/family.jpg";
import helping from "../assets/images/helping.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faStar,
  faPenToSquare,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Home() {
  return (
    <>
      <IntroComponent />
      <Tutorial />
      <FeaturesComponent />
      <ReliablePerson />
      <CleanerComponent />
      <MeetCustomerComponent />
      <ForthSectionComponent />
      <InboxSectionComponent />
    </>
  );
}

//==========================================
// INTRO SECTION
//==========================================
export class IntroComponent extends React.Component {
  render() {
    return (
      <section className={styles.introSection}>
        <Head>
          <title>
            Everyone needs help - maid is a career
          </title>
          <meta
            name="This is where a skilled and dependable house help becomes an invaluable asset, contributing to the overall well-being and harmony of a household"
            content="Get a valuable and affordable house help service without breaking the bank"
            key="desc"
          />
        </Head>
        <div className={styles.leftSection}>
          <h1>A happy home deserve a help who will not only complete chores but becomes a family. </h1>
          <p className="text-xl">
            A good house help is not just someone who completes chores but someone who becomes an integral part of the family, sharing responsibilities and making life more manageable.
          </p>
          <button className="text-white">
            Get started <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className={styles.rightSection}>
          <Image
            src={happyFamily}
            alt="happy african family"
            className={styles.image}
          />
        </div>
      </section>
    );
  }
}

export class Tutorial extends React.Component {
  render() {
    const reliableSystem: { icon: any, title: string, text: string }[] = [
      { icon: faPenToSquare, title: "No Cost to join", text: "You can register to render help or as an employer, either way we have made the system stress free for very one" },
      { icon: faTags, title: "Choose from our categories", text: "As a help choose from a list of categories and complete your KYC and you're set to go." },
      { icon: faStar, title: "Work with the best—without breaking the bank", text: "Our system merges list of help without affordable price." },
    ];
    return (
      <section className={`${styles.introSection} bg-slate-50`}>
        <div className={styles.rightSection}>
          <Image
            src={supportSystem}
            alt="support system image"
            className={styles.image}
          />
        </div>
        <div className={styles.leftSection}>
          <h1>Reliable Support System </h1>
          <p className="text-xl">A competent house help provides a reliable support system that enables busy individuals or families to focus on their careers and personal lives without being overwhelmed by domestic tasks. </p>
          <ul className="space-y-14">
            {reliableSystem.map((item, index) => (
              <li key={index}>
                <><FontAwesomeIcon icon={item.icon} className="text-2xl mr-3" /> <span className="text-xl font-bold">{item.title}</span></>
                <p className="mt-2 text-lg">{item.text}</p>
              </li>
            ))}
          </ul>
          <button className="text-white ">Get started</button>
        </div>
      </section >
    );
  }
}

//==========================================
// FEATURES SECTION
//==========================================
export class FeaturesComponent extends React.Component {
  render() {
    let featuresData = [
      {
        icon: <FontAwesomeIcon icon={faStar} />,
        title: "Category 1",
        rating: "4.8/5"
      },
      {
        icon: <FontAwesomeIcon icon={faStar} />,
        title: "Category 2",
        rating: "4.8/5"
      },
      {
        icon: <FontAwesomeIcon icon={faStar} />,
        title: "Category 3",
        rating: "4.8/5"
      },
      {
        icon: <FontAwesomeIcon icon={faStar} />,
        title: "Category 4",
        rating:
          "4.8/5",
      },
      {
        icon: <FontAwesomeIcon icon={faStar} />,
        title: "Category 5",
        rating:
          "4.8/5",
      },
      {
        icon: <FontAwesomeIcon icon={faStar} />,
        title: "Category 6",
        rating:
          "4.8/5",
      },
    ];
    return (
      <section className={styles.featuresSection}>
        <h1 className="text-center text-[45px] font-bold pb-8">Browse Skills by Categories</h1>
        <p className="w-3/4 mx-auto text-center pb-10 text-xl">In the fast-paced world we inhabit today, the demands of work, family, and personal pursuits often leave us with limited time to attend to the myriad tasks that keep a household running smoothly. This is where a skilled and dependable house help becomes an invaluable asset, contributing to the overall well-being and harmony of a household.</p>
        <div className="grid grid-cols-4 gap-5">
          {featuresData.map((val, i) => (
            <div className="h-32 cursor-pointer col-span-1 p-2 outline outline-green-50 outline-1 bg-green-50 hover:bg-green-100" key={i}>
              <div className={`${styles.column} space-y-5 p-3`}>
                <h1 className="text-[25px] font-medium capitalize">{val.title}</h1>
                <aside className="flex space-x-16">
                  <div>
                    <span className="text-green-700 mr-2">{val.icon}</span>
                    <span>{val.rating}</span>
                  </div>
                  <aside>214 Skills</aside>
                </aside>

              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

//==========================================
// show someone on a wheel chair
//==========================================

export class ReliablePerson extends React.Component {
  render() {
    return (
      <section className="bg-green-400 w-9/12 mx-auto rounded-xl flex">
        <aside className="p-8 space-y-8 w-full  ">
          <h3 className="font-bold text-xl">Skill Set and Adaptability</h3>
          <h1 className="tracking-wide font-mono font-bold text-3xl">A standout house help possesses a diverse skill set that goes beyond mundane chores. </h1>
          <p className="text-xl">Cooking nutritious and delicious meals, managing household finances, caring for children and pets, and even assisting with administrative tasks are all part of their repertoire. </p>
          <button className="bg-blue-900">Find Help</button>
        </aside>
        <section
          className="rounded-r-xl bg-[url('../assets/images/wheel.webp')] bg-cover bg-no-repeat bg-blend-overlay bg-opacity-50 bg-green-950 hidden sm:block w-full"
        ></section>
      </section>
    )
  }
}

//==========================================
// CLEANER AT YOUR SERVICE SECTION
//==========================================
export class CleanerComponent extends React.Component {
  render() {
    const cleanliness: { title: string, pointer: string }[] = [
      { title: "Find Skills and hire a pro", pointer: "Register" },
      { title: "Browse through categories", pointer: "Learn More" },
      { title: "Become a helper, and earn", pointer: "Register" },
    ]
    return (
      <section className="text-white my-20 bg-[url('../assets/images/cleaner.avif')] bg-cover bg-center bg-no-repeat h-screen flex items-center">
        <aside className="p-10 backdrop-brightness-75 w-full items-center space-y-14 h-screen">
          <h3 className="text-[25px] font-bold tracking-wide">House Help Made Easy</h3>
          <h1 className="text-[45px] font-bold font-sans w-1/3">Maintaining Cleanliness and Order:</h1>
          <p className="text-xl w-1/3">From cleaning and cooking to laundry and organizing, a capable house help ensures that the home remains a comfortable and welcoming space, allowing its occupants to recharge and unwind after a hectic day.</p>
          <div className="grid grid-cols-3 gap-10">
            {cleanliness.map((item, index) => (
              <aside key={index} className="bg-green-600 cursor-pointer space-y-5 rounded-xl p-5 hover:bg-white hover:text-green-600">
                <h1 className="text-[33px] font-bold w-2/3">{item.title}</h1>
                <p className="text-xl font-medium space-x-8"><span>{item.pointer}</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </p>
              </aside>
            ))}
          </div>
        </aside>
      </section>
    );
  }
}
//==========================================
// MEET YOUR CUSTOMER SECTION
//==========================================
export class MeetCustomerComponent extends React.Component {
  render() {
    return (
      <section className={styles.meetCust}>
        <Image src={womanVideo} alt="Video of a Woman" className={styles.img} />
        <div className={styles.con}>
          <b>2 minutes video interview of house help volunteer</b>
          <p className="text-xl">
            Furthermore, a skilled house help demonstrates adaptability by quickly learning and implementing new routines, accommodating changing schedules, and efficiently managing unexpected situations. As an employer you are previledged to watch a video of a help before hiring.
          </p>
          <p className="text-xl my-8">
            A clean and organized home is essential for maintaining physical and mental well-being. A proficient house help takes pride in upholding high standards of cleanliness, ensuring that living spaces are not just tidy but also sanitized.
            They adeptly organize and declutter spaces, contributing to an environment that promotes positivity and reduces stress.
          </p>
          <button>Hire a help</button>
        </div>
      </section>
    );
  }
}

//==========================================
// START SELLING DIRECTLY
//==========================================
export class ForthSectionComponent extends React.Component {
  render() {
    return (
      <section className={styles.forthSection}>
        <div className={`${styles.column} space-y-8`}>
          <h3 className="text-xl font-light tracking-wide">We are the African no.1 house help hiring platform</h3>

          <b>Nurturing a Family Atmosphere:</b>
          <p className="text-xl">
            Beyond tasks and responsibilities, an exceptional house help contributes to fostering a warm and harmonious family atmosphere. Their presence adds an element of continuity, providing a sense of stability and routine for both adults and children.
          </p>
          <p className="text-xl">
            A good house help often forms deep bonds with family members, becoming a confidant, mentor, and friend to those they serve.
          </p>
          <button>Start Chatting Now</button>
        </div>
        <Image src={family} alt="Video of a family" className={styles.img} />
      </section>
    );
  }
}

//==========================================
// Respectful communication
//==========================================
export class InboxSectionComponent extends React.Component {
  render() {
    return (
      <section className={styles.inboxSection}>
        <Image src={helping} alt="helping elderly people" className={styles.img} />
        <div className={`${styles.column} space-y-8`}>
          <b>Respectful Communication and Boundaries:</b>
          <p className="text-xl first-letter">
            Effective communication and understanding of boundaries are key qualities of a reliable house help. They respect the privacy of the family while also establishing open lines of communication, allowing for smooth coordination of tasks and preferences.
          </p>
          <p className="text-xl first-letter">
            This balance ensures that everyone feels comfortable and heard, enhancing the overall household experience.
          </p>

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

