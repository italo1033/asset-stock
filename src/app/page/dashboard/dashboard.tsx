import React, { useState } from 'react';
import styles from './dashboard.module.css';

const Dashboard: React.FC<any> = () => {


  return (
    <section className={styles.dashboard}>
        <div className={styles.dashboardMetas}>

        </div>

        <div className={styles.containersubcards}>
          <div>1</div>
          <div>2</div>
          <div>2</div>
        </div>

        <div className={styles.containerfinal}>
          <div className={styles.item1}>1</div>
          <div className={styles.item2}>2</div>
        </div>
    </section>
  );
};

export default Dashboard;
