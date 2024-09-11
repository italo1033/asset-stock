// Dashboard.tsx
import React from 'react';
import styles from './dashboard.module.css';
import CardInfor from '@/app/components/Cardinfor/cardinfor';
import LastExpenses from '@/app/components/LastExpenses/lastExpenses';
import ChartServices from '@/app/components/Grafics/GraficServices/graficServices';
import SalesGraphic from '@/app/components/Grafics/ChartsSales/SalesGraphic';
import RadialBarChart from '@/app/components/Grafics/ChartUptime/chartUptime';

interface DashboardProps {
  onButtonClickDespesa: (item: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onButtonClickDespesa }) => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.dashboardMetas}>
        <CardInfor texto='Ativos em uso' valor={500} />
        <CardInfor texto='Estoque' valor={300} />
        <CardInfor texto='Serviços' valor={30} />
        <CardInfor texto='Serviços Abertos' valor={5} />
        <CardInfor texto='Total de Despesas' valor={1500} />
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
        <div className={styles.item1}><ChartServices /> </div>
        <div className={styles.item2}>
          <LastExpenses onViewAllExpenses={() => onButtonClickDespesa('Todas Despesas')} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
