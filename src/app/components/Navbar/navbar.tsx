import { useState } from 'react';
import styles from './navbar.module.css';
import { IoSettings } from "react-icons/io5";

const Navbar: React.FC = () => {
    return (
        <section className={styles.navbar}>
            <div className={styles.containernavbaritens}>
                <IoSettings size={20}/>
            </div>
        </section>
    );
};

export default Navbar;
