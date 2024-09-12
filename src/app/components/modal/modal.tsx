'use client'
import UserRegistrationPage from '@/app/page/ColabRegister/UserRegistrationPage';
import ExpenseRegistrationPage from '@/app/page/DespesaRegister/ExpenseRegistrationPage';
import EquipmentRegistrationPage from '@/app/page/EquipmentRegister/EquipmenttRegisterPage';
import Modal from 'react-bootstrap/Modal';
import styles from './modal.module.css'

interface ModalRegisterProps {
  onHide: () => void; 
  show: boolean; 
  componentType?: 'Colaboradores' | 'Despesas' | 'Estoque'; 
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ onHide, show, componentType }) => {
  const renderComponent = () => {
    switch (componentType) {
      case 'Colaboradores':
        return <UserRegistrationPage />;
      case 'Despesas':
        return <ExpenseRegistrationPage />;
      case 'Estoque':
        return <EquipmentRegistrationPage />;
      default:
        return <ExpenseRegistrationPage />; 
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      className={styles.modalBody}
    >
        {renderComponent()}
    </Modal>
  );
}

export default ModalRegister;
