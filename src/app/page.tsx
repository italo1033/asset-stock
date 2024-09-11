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

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(null);

  const handleViewAllExpenses = () => {
    setCurrentComponent('Todas Despesas');
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Lista de Colaboradores':
        return <ListColaboradores
                Atributo1="Id"
                Atributo2="Nome"
                Atributo3="Cargo"
                Atributo4="Função"
                Atributo5="Equipamento"
                typeSolicitação="colaboradores"
                />;
      case 'Todas Despesas':
        return <ListDespesas 
        Atributo1="Id"
        Atributo2="valor"
        Atributo3="descricao" />;

      case 'Adicionar Colaborador':
        return <UserRegistrationPage />;
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
