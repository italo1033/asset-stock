'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Sidebar from './components/Sidbar/sidbar';
import Navbar from './components/Navbar/navbar';
import Dashboard from './page/dashboard/dashboard';
import ListColaboradores from './page/List/ListColaboradores';
import ListDespesas from './page/List/ListDespesas';
import UserRegistrationPage from './page/ColabRegister/UserRegistrationPage';
import EquipmentRegistrationPage from './page/EquipmentRegister/EquipmenttRegisterPage';
import ExpenseRegistrationPage from './page/DespesaRegister/ExpenseRegistrationPage';
import ListEstoque from './page/List/ListEstoque';
import ListServicos from './page/List/ListServicos';

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(null);

  const handleViewAllExpenses = () => {
    setCurrentComponent('Despesas');
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Colaboradores':
        return <ListColaboradores />;
      case 'Despesas':
        return <ListDespesas />;
      case 'Equipamento':
        return <ListEstoque />;
      case 'Serviços':
        return <ListServicos />;
      default:
        return <Dashboard onButtonClickDespesa={handleViewAllExpenses} />;
    }
  };

  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.containerSideBar}>
        <Sidebar onButtonClickSidebar={setCurrentComponent} />
      </div>
      <div className={styles.containerPainel}>
        <Navbar />
        <div className={styles.ContainerComponent}>
          {renderComponent()}
        </div>
      </div>
    </section>
  );
}
