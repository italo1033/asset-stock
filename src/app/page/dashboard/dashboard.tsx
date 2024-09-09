import React, { useState } from 'react';
import styles from './dashboard.module.css';
import CardInfor from '@/app/components/Cardinfor/cardinfor';
import LastExpenses from '@/app/components/LastExpenses/lastExpenses';
import ChartServices from '@/app/components/Grafics/GraficServices/graficServices';
import SalesGraphic from '@/app/components/Grafics/ChartsSales/SalesGraphic';
import RadialBarChart from '@/app/components/Grafics/ChartUptime/chartUptime';


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
            <RadialBarChart />
          </div>

          <div>
          <SalesGraphic Profit={100} Expanse={100} />
          </div>

          <div>2</div>
        </div>

        <div className={styles.containerfinal}>
          <div className={styles.item1}><ChartServices/> </div>
          <div className={styles.item2}><LastExpenses /></div>
        </div>
    </section>
  );
};

export default Dashboard;
