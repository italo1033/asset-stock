import { useState } from 'react';
import styles from './sidebar.module.css';
import MenuItem from './menuItem';

interface ButtonComponentProps {
  onButtonClickSidebar: (item: string) => void;
}

const Sidebar: React.FC<ButtonComponentProps> = ({ onButtonClickSidebar }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleButtonClick = (item: string) => {
    setSelectedItem(item);
    if (onButtonClickSidebar) {
      onButtonClickSidebar(item);
    }
  };

  return (
    <div className={styles.sidebar}>
      <header className={styles.sidebarheader}>
        Logo
      </header>

      <menu className={styles.sidebarmenu}>
        <MenuItem title="Colaboradores" submenu={['Lista de Colaboradores', 'Adicionar Colaborador', 'Atualizar Colaborador' ,'Excluir Colaborador']} onButtonClickMenuItem={handleButtonClick} />
        <MenuItem title="Estoque" submenu={['Equipamentos', 'Adicionar Equipamento']} onButtonClickMenuItem={handleButtonClick} />
        <MenuItem title="Despesas" submenu={['Visualizar Despesas', 'Adicionar Despesas']} onButtonClickMenuItem={handleButtonClick} />
        <MenuItem title="Serviços" submenu={['Visualizar Serviços', 'Criar Ordem de serviço']} onButtonClickMenuItem={handleButtonClick} />
      </menu>
    </div>
  );
};

export default Sidebar;
