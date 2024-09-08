"use client"
import { useState } from 'react';
import styles from './sidebar.module.css';
import { TbUserHexagon } from "react-icons/tb";
import { CgShutterstock } from "react-icons/cg";
import { PiTicketFill } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";

interface MenuItemProps {
    title: string;
    submenu: string[];
    onButtonClickMenuItem: (item: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, submenu, onButtonClickMenuItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    const renderComponent = () => {
        switch (title) {
          case 'Colaboradores':
            return <TbUserHexagon />;
          case 'Estoque':
            return <CgShutterstock />
          case 'Despesas':
            return <FaMoneyBillTransfer/>;;
          case 'Serviços':
            return <PiTicketFill/>;
          default:
            return <div></div>;
        }
      };

    return (
        <div>
            <div className={styles.menuItem} onClick={toggleSubMenu}>
                {renderComponent()}
                {title}
            </div>
            {isOpen && (
                <div className={styles.submenu}>
                    {submenu.map((item, index) => (
                        <button 
                            key={index} 
                            className={styles.submenuItem} 
                            onClick={() => onButtonClickMenuItem(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuItem;
