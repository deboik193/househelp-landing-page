import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import groupMobile from "../assets/images/group-mobile.svg";
import inbox from "../assets/images/inbox.png";
import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.png";
import styles from "../styles/Index.module.css";
import Image, { StaticImageData } from "next/image";
import womanVideo from "../assets/images/video.png";
import smillingWoman from "../assets/images/woman.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faStar,
  faVideo,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Home() {
  return (
    <>
      <IntroComponent />
      <FeaturesComponent />
      <MeetCustomerComponent />
      <ForthSectionComponent />
      <InboxSectionComponent />
      <TestimonialComponent />
    </>
  );
}

//==========================================
// INTRO SECTION
//==========================================
export class IntroComponent extends React.Component {
  render() {
    let userImg: StaticImageData[] = [user1, user2, user3];
    return (
      <section className={styles.introSection}>
        <div className={styles.leftSection}>
          <h1>Start chatting with customers, anytime, anywhere with Apex</h1>
          <span>
            Great software that allows you to chat fromany place at any time
            without any interruption
          </span>
          <button>
            Start Chatting Now <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <div className={styles.ratingCon}>
            {userImg.map((val, i) => (
              <Image
                key={i}
                src={val}
                alt="user faces"
                className={styles.userImage}
              />
            ))}
            <div className={styles.spacer}></div>
            <div className={styles.column}>
              <b>2,291</b>
              <span>Happy Customers</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.column}>
              <b>4.8/5</b>
              <span>
                {["", "", "", "", ""].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: i == 4 ? "#5B7486" : "#77DF75" }}
                  />
                ))}
                &nbsp; Rating
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <Image
            src={smillingWoman}
            alt="Smillimg african woman"
            className={styles.image}
          />
        </div>
      </section>
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
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: "Video messaging",
        description:
          "This software is very easy for you to manage. You can use it as you wish.",
      },
      {
        icon: <FontAwesomeIcon icon={faClock} />,
        title: "Save your time",
        description:
          "This software is very easy for you to manage. You can use it as you wish.",
      },
      {
        icon: <FontAwesomeIcon icon={faWifi} />,
        title: "Keep safe & private",
        description:
          "This software is very easy for you to manage. You can use it as you wish.",
      },
    ];
    return (
      <section className={styles.featuresSection}>
        <b>Features for a better experience</b>
        <div className={styles.row}>
          {featuresData.map((val, i) => (
            <div className={styles.featureCon} key={i}>
              <div className={styles.icons}>{val.icon}</div>
              <div className={styles.column}>
                <b>{val.title}</b>
                <span>{val.description}</span>
              </div>
            </div>
          ))}
        </div>
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
          <b>Meet your customers, with live video chat</b>
          <span>
            Proin faucibus nibh et sagittis a. Lacinia purus ac amet
            pellentesque aliquam enim, Lacinia purus ac amet pellentesque
            aliquam enim.
          </span>
          <br/>
          <span>
            Get paychecks up to two days early. Get a $20 bonus when you receive
            qualifying direct deposits, Lacinia purus ac amet pellentesque
            aliquam enim.
          </span>
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
        <div className={styles.column}>
          <b>Start selling directly inside conversations</b>
          <span>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered all injected humour or randomised words
            which don&apos;t look even slightly believable.{" "}
          </span>
          <button>Start Chatting Now</button>
        </div>
        <Image src={groupMobile} alt="Video of a Woman" className={styles.img} />
      </section>
    );
  }
}

//==========================================
// INBOX SECTION COMPONENT
//==========================================
export class InboxSectionComponent extends React.Component {
  render() {
    return (
      <section className={styles.inboxSection}>
        <Image src={inbox} alt="Video of a Woman" className={styles.img} />
        <div className={styles.column}>
          <b>Get direct orders from your customers</b>
          <span>
            Create custom landing pages with Rareblocks that converts more
            visitors than any website. With lots of unique blocks easily build a
            page. There are many variations of passages of available.{" "}
          </span>
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

//==========================================
// TESTIMONIAL COMPONENT
//==========================================
export class TestimonialComponent extends React.Component {
  render() {
    let testimonialData: object[] = [
      {
        title: "“Incredible Experience”",
        content:
          "We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.",
        userName: "Wade Warren",
        userRole: "CEO, ABC Corporation",
        userImg: photo1,
      },
      {
        title: "“Dependable, Responsive, Professional”",
        content:
          "Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.",
        userName: "Esther Howard",
        userRole: "CEO, ABC Corporation",
        userImg: photo2,
      },
    ];
    return (
      <section className={styles.testimonialSection}>
        <b>Our blessed client said about us 😍</b>
        <div className={styles.testimonialConRow}>
        {testimonialData.map((val, i) => {
          return (
            <div className={styles.testimonialCon} key={i}>
              <div className={styles.testimonialCard}>
                <b className={styles.title}>{val['title']}</b>
                <span className={styles.content}>{val['content']}</span>
              </div>
              <div className={styles.userCon}>
                <Image
                  src={val['userImg']}
                  alt="Video of a Woman"
                  className={styles.img}
                />
                <div className={styles.column}>
                  <span className={styles.userName}>{val['userName']}</span>
                  <span className={styles.userRole}>{val['userRole']}</span>
                </div>
              </div>
            </div>
          );
        })}

        </div>
      </section>
    );
  }
}
