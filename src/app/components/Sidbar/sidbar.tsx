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
        <MenuItem title="Item 1" submenu={['Subitem 1.1', 'Subitem 1.2']} onButtonClickMenuItem={handleButtonClick} />
        <MenuItem title="Item 2" submenu={['Subitem 2.1', 'Subitem 2.2']} onButtonClickMenuItem={handleButtonClick} />
        <MenuItem title="Item 3" submenu={['Subitem 3.1', 'Subitem 3.2']} onButtonClickMenuItem={handleButtonClick} />
      </menu>
    </div>
  );
};

export default Sidebar;
