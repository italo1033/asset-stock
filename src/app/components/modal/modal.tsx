'use client'
import UserRegistrationPage from '@/app/page/ColabRegister/UserRegistrationPage';
import ExpenseRegistrationPage from '@/app/page/DespesaRegister/ExpenseRegistrationPage';
import EquipmentRegistrationPage from '@/app/page/EquipmentRegister/EquipmenttRegisterPage';
import Modal from 'react-bootstrap/Modal';
import styles from './modal.module.css'
import ServiceOrderRegistrationPage from '@/app/page/ServiceOrder/ServiceOrderRegistrationPage';

interface ModalRegisterProps {
  onHide: () => void; 
  show: boolean; 
  componentType?: 'Colaboradores' | 'Servico' | 'Estoque' | 'Equipamento'; 
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ onHide, show, componentType }) => {
  const renderComponent = () => {
switch (componentType) {
    case 'Colaboradores':
        return <UserRegistrationPage />;
    case 'Estoque':
        return <ExpenseRegistrationPage />;
    case 'Equipamento':
        return <EquipmentRegistrationPage />;
    case 'Servico':
        return <ServiceOrderRegistrationPage />

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
