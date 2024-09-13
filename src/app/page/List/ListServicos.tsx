import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IoIosAddCircle } from 'react-icons/io';
import ModalRegister from '@/app/components/modal/modal';

interface Servicos {
  id: number;
  servico: string;
  id_usuario: string;
  id_Status: string;
}

const ListServicos: React.FC = () => {
  const [Servicos, setServicos] = useState<Servicos[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/servicos/listar');
        setServicos(response.data);
      } catch (error) {
        console.error('Erro ao buscar Servicos:', error);
      }
    };

    fetchServicos();
  }, []);

  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/servicos/excluir/${id}`);
      setServicos((prevServicos) => prevServicos.filter((item) => item.id !== id)); // Atualiza a lista após exclusão
    } catch (error) {
      console.error('Erro ao excluir o item:', error);
    }
  };

  return (
    <section className={styles.containerList}>
      <div className={styles.dados}>
        <div className={styles.add}>
          <IoIosAddCircle size={30} onClick={handleShow} />
        </div>

        <ul className={styles.list_dados}>
          <li style={{ width: '20%' }}>id</li>
          <li style={{ width: '20%' }}>Serviços</li>
          <li style={{ width: '20%' }}>Responsável</li>
          <li style={{ width: '20%' }}>Status</li>
          <li style={{ width: '20%' }}></li>
          <li style={{ width: '20%' }}></li>
        </ul>

        {Servicos.map((item) => (
          <ul key={item.id} className={styles.list_dados_map}>
            <li style={{ width: '20%' }}>{item.id}</li>
            <li style={{ width: '20%' }}>{item.servico}</li>
            <li style={{ width: '20%' }}>{item.id_usuario}</li>
            <li style={{ width: '20%' }}>{item.id_Status}</li>
            <li style={{ width: '20%' }}><FaEdit /></li>
            <li style={{ width: '20%' }}><RiDeleteBin5Fill color='red' onClick={() => deleteItem(item.id)} /></li>
          </ul>
        ))}
      </div>

      <ModalRegister show={showModal} onHide={handleClose} componentType="Servico" />
    </section>
  );
};

export default ListServicos;
