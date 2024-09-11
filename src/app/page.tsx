"use client"

import { useState } from 'react';
import styles from './page.module.css';
import Sidebar from './components/Sidbar/sidbar';
import Navbar from './components/Navbar/navbar';
import Dashboard from './page/dashboard/dashboard';
import ListColaboradores from './page/Colaboradores/ListColaboradores';

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(null);

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Lista de Colaboradores':
        return <ListColaboradores />;
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
