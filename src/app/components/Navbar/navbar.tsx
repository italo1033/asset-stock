import React, { useState } from 'react';
import styles from './navbar.module.css';
import { IoSettings } from "react-icons/io5";
import UserMenu from './usermenu';

const Navbar: React.FC<any> = () => {
const handleSelectOption = (option: string) => {
    switch (option) {
        case 'settings':
        console.log('Navigating to Settings');
        break;
        case 'logout':
        console.log('Logging out');
        break;
        default:
        break;
    }
    };


  return (
    <section className={styles.navbar}>
      {/* Descomente e ajuste conforme necessário */}
      {/* <div className={styles.containernavbaritens}>
        <IoSettings size={20} />
      </div> */}

      
        <UserMenu
        logo="https://avatars.githubusercontent.com/u/79849291?v=4"
        name="Italo Santos"
        role="Admin"
        onSelectOption={handleSelectOption}
      />
    </section>
  );
};

export default Navbar;
