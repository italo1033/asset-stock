"use client"
import { Fragment, useState } from "react";
import Sidebar from "./components/Sidbar/sidbar";
import Navbar from "./components/Navbar/navbar";
import styles from "./page.module.css"

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState(null);
  return (
      <section className={styles.containerPrincipal}>
        <div className={styles.containerSideBar}>
            <Sidebar />
        </div>
        <div className={styles.containerPainel}>
            <Navbar />
            <div className={styles.ContainerComponent}>

            </div>
        </div>
      </section>
      
  );
}
