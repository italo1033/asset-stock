import Image from "next/image";
import styles from "./cardinfor.module.css";

export default function CardInfor({ valor, texto }: { valor: number; texto: string }) {
  return (
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.amount}>{valor}</span>
          <span className={styles.label}>{texto}</span>
        </div>
      </div>
  );
}