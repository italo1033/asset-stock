"use client"

import { useState } from 'react';
import styles from './page.module.css';
import Sidebar from './components/Sidbar/sidbar';
import Navbar from './components/Navbar/navbar';
import Dashboard from './page/dashboard/dashboard';
<<<<<<< HEAD
import ListColaboradores from './page/Colaboradores/ListColaboradores';
=======
import EquipmentRegistrationPage from './page/EquipmentRegister/EquipmenttRegisterPage';
import UserRegistrationPage from './page/ColabRegister/UserRegistrationPage';
import ExpenseRegistrationPage from './page/DespesaRegister/ExpenseRegistrationPage';
>>>>>>> fbffff558ad3d01da551c1f43c2c085902cb3288

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(null);

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Lista de Colaboradores':
<<<<<<< HEAD
        return <ListColaboradores />;
      case 'Adicionar Colaborador':
        return <div>Componente para Subitem 1.2</div>;
      case 'Subitem 2.1':
        return <div>Componente para Subitem 2.1</div>;
      case 'Subitem 2.2':
        return <div>Componente para Subitem 2.2</div>;
=======
        return <div>Componente para Subitem 1.1</div>;
      case 'Adicionar Equipamento':
        return <EquipmentRegistrationPage />;
      case 'Adicionar Colaborador':
        return <UserRegistrationPage />;
      case 'Adicionar Despesas':
        return <ExpenseRegistrationPage />;
>>>>>>> fbffff558ad3d01da551c1f43c2c085902cb3288
      case 'Subitem 3.1':
        return <div>Componente para Subitem 3.1</div>;
      case 'Subitem 3.2':
        return <div>Componente para Subitem 3.2</div>;
      default:
        return <Dashboard />;
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
