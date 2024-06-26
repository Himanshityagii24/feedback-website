import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, colleagues.</b> Together We Grow: Your Feedback, Our Strength.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/feedback.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <Link href="/feedback" legacyBehavior>
            <a className={styles.button}>Rate now!</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
