"use client"
import { useState } from 'react';
import styles from './sidebar.module.css';

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

    return (
        <div>
            <div className={styles.menuItem} onClick={toggleSubMenu}>
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
