import { useState } from 'react';
import styles from './sidebar.module.css';
import Logo from '@/app/image/svg/logo';
import { TbUserHexagon } from 'react-icons/tb';
import { CgShutterstock } from "react-icons/cg";
import { PiTicketFill } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";

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
        <Logo width={200} />
      </header>

      <div className={styles.sidebarmenu}>
        <div className={styles.menuItem} onClick={() => handleButtonClick('Colaboradores')}>
          <TbUserHexagon />
          <span>Colaboradores</span>
        </div>

        <div className={styles.menuItem} onClick={() => handleButtonClick('Equipamento')}>
          <CgShutterstock />
          <span>Equipamento</span>
        </div>

        <div className={styles.menuItem} onClick={() => handleButtonClick('Despesas')}>
          <FaMoneyBillTransfer />
          <span>Despesas</span>
        </div>

        <div className={styles.menuItem} onClick={() => handleButtonClick('Serviços')}>
          <PiTicketFill />
          <span>Serviços</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
