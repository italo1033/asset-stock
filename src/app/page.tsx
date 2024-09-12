'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Sidebar from './components/Sidbar/sidbar';
import Navbar from './components/Navbar/navbar';
import Dashboard from './page/dashboard/dashboard';
import ListColaboradores from './page/List/ListColaboradores';
import LastExpenses from './components/LastExpenses/lastExpenses';
import ListDespesas from './page/List/ListDespesas';
import UserRegistrationPage from './page/ColabRegister/UserRegistrationPage';
import EquipmentRegistrationPage from './page/EquipmentRegister/EquipmenttRegisterPage';
import ExpenseRegistrationPage from './page/DespesaRegister/ExpenseRegistrationPage';
import ListEquipamento from './page/List/ListEquipamento';

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
      case 'Equipamentos':
        return <ListEquipamento />;
      case 'Adicionar Colaborador':
           return <UserRegistrationPage />;
      case 'Adicionar Equipamento':
            return <EquipmentRegistrationPage/>;
      case 'Adicionar Despesas':
            return <ExpenseRegistrationPage />;
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
