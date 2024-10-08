import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { useState } from "react";
import styles from "./SalesGraphic.module.css";

// Registrar elementos necessários para o gráfico
Chart.register(ArcElement, Tooltip, Legend);

export default function SalesGraphic({ Profit, Expanse }: { Profit: number; Expanse: number }) {
 
  const data = {
    labels: ["Profit", "Expanse"],
    datasets: [
      {
        data: [Profit, Expanse],
        backgroundColor: ["#6366F1", "#2DD4BF"], 
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "90%",
    plugins: {
      legend: {
        display: false, 
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.contentTitle} >
          <h3 className={styles.title}>Sales Overview</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.chartContainer}>
            <Doughnut data={data} options={options} />
            <div className={styles.amountText}>$500,00</div>
          </div>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span
                className={styles.dot}
                style={{ backgroundColor: "#6366F1" }}
              ></span>
              <span>Profit: </span>
              <span className={styles.value}>{Profit}</span>
            </div>
            <div className={styles.infoItem}>
              <span
                className={styles.dot}
                style={{ backgroundColor: "#2DD4BF" }}
              ></span>
              <span>Expanse: <br /> </span>
              <span className={styles.value}>{Expanse}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
