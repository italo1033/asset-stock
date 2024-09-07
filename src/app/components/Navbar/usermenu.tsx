import React, { useState } from 'react';
import styles from './usemenu.module.css';

interface UserMenuProps {
  logo: string;
  name: string;
  role: string;
  onSelectOption: (option: string) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ logo, name, role, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleUserClick = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
      <div className={styles.container}>
        <div className={styles.userInfo} onClick={handleUserClick}>
          <img src={logo} alt="User Logo" className={styles.logo} />
          <div className={styles.userDetails}>
            <span className={styles.name}>{name}</span>
            <span className={styles.role}>{role}</span>
          </div>
        </div>
        {isOpen && (
          <select
            className={styles.dropdown}
            onChange={handleOptionSelect}
            defaultValue=""
          >
            <option value="" disabled>Select an option</option>
            <option value="settings">Settings</option>
            <option value="logout">Logout</option>
          </select>
        )}
      </div>
  );
};

export default UserMenu;
