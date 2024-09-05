import Image from "next/image";
import { Fragment } from "react";
import Sidebar from "./components/Sidbar/sidbar";
import CardInfor from "./components/Cardinfor/cardinfor";
import Navbar from "./components/Navbar/navbar";
import styles from "./page.module.css"

export default function Home() {
  return (
      <section className={styles.containerPrincipal}>
        <Sidebar />
        <section>
            <Navbar />
            <div>
              <CardInfor  valor={150} texto="teste123"/>
            </div>
        </section>
      </section>
      
  );
}
