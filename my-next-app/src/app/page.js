import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Featured from "@/components/featured/Featured";
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
       <Navbar />
      <Featured />
      <Footer />
    </div>
  );
}
