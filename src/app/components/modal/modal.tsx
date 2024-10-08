'use client'
import UserRegistrationPage from '@/app/page/ColabRegister/UserRegistrationPage';
import ExpenseRegistrationPage from '@/app/page/DespesaRegister/ExpenseRegistrationPage';
import EquipmentRegistrationPage from '@/app/page/EquipmentRegister/EquipmenttRegisterPage';
import Modal from 'react-bootstrap/Modal';
import styles from './modal.module.css'
import ServiceOrderRegistrationPage from '@/app/page/ServiceOrder/ServiceOrderRegistrationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRegistrationPage from '@/app/page/StockRegister/StockRegistrationPage';

interface ModalRegisterProps {
  onHide: () => void; 
  show: boolean; 
  componentType?: 'Colaboradores' | 'Servico' | 'Equipamento' | 'Despesa'; 
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ onHide, show, componentType }) => {
  const renderComponent = () => {
switch (componentType) {
    case 'Colaboradores':
        return <UserRegistrationPage />;
    case 'Equipamento':
        return <EquipmentRegistrationPage />;
    case 'Servico':
        return <ServiceOrderRegistrationPage />
      case 'Despesa':
        return <ExpenseRegistrationPage />;

    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      className={styles.modalBody}
      backdrop={true}  
      keyboard={true}
      centered
    >
        {renderComponent()}
    </Modal>
  );
}

export default ModalRegister;
