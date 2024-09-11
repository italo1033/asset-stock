"use client"

import { useState } from 'react';
import styles from './page.module.css';
import Sidebar from './components/Sidbar/sidbar';
import Navbar from './components/Navbar/navbar';
import Dashboard from './page/dashboard/dashboard';
import List from './page/List/List';

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(null);

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Lista de Colaboradores':
        return <List
                Atributo1="Id"
                Atributo2="Nome"
                Atributo3="Cargo"
                Atributo4="Função"
                Atributo5="Equipamento"
                typeSolicitação="colaboradores"
                />;
      case 'Adicionar Colaborador':
        return <div>Componente para Subitem 1.2</div>;
      case 'Subitem 2.1':
        return <div>Componente para Subitem 2.1</div>;
      case 'Subitem 2.2':
        return <div>Componente para Subitem 2.2</div>;
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
