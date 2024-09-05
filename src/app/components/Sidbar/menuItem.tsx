"use client"
import { useState } from 'react';
import styles from './sidebar.module.css';

interface MenuItemProps {
    title: string;
    submenu: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ title, submenu }) => {
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
                        <a href="#" key={index} className={styles.submenuItem}>
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuItem