import React, { useState } from 'react';
import styles from './dashboard.module.css';
import SalesGraphic from '@/app/components/GraficPage/SalesGraphic';
import CardInfor from '@/app/components/Cardinfor/cardinfor';


const Dashboard: React.FC<any> = () => {


  return (
    <section className={styles.dashboard}>
        <div className={styles.dashboardMetas}>
          <CardInfor texto='verde' valor={1000} />
          <CardInfor texto='verde' valor={1000} />
          <CardInfor texto='verde' valor={1000} />
          <CardInfor texto='verde' valor={1000} />
        </div>

        <div className={styles.containersubcards}>
          <div>
          <SalesGraphic Profit={100} Expanse={100} />
          </div>
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
