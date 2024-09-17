import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IoIosAddCircle } from 'react-icons/io';
import ModalRegister from '@/app/components/modal/modal';

interface Despesa {
  id: number;
  valor: string;
  descricao: string;
}

const ListDespesas: React.FC<any> = () => {
  const [Despesa, setDespesa] = useState<Despesa[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const fetchDespesa = async () => {
      try {
        const response = await axios.get('http://localhost:3001/despesa/listar');
        setDespesa(response.data);
      } catch (error) {
        console.error('Erro ao buscar Despesa:', error);
      }
    };

    fetchDespesa();
  }, []);

  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/servicos/excluir/${id}`);
      setDespesa((prevDespesa) => prevDespesa.filter((item) => item.id !== id)); // Atualiza a lista após exclusão
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
          <li style={{ width: '20%' }}>valor</li>
          <li style={{ width: '20%' }}>Descrição</li>
          <li style={{ width: '20%' }}></li>
          <li style={{ width: '20%' }}></li>
        </ul>

        {Despesa.map((item) => (
          <ul key={item.id} className={styles.list_dados_map}>
            <li style={{ width: '20%' }}>{item.id}</li>
            <li style={{ width: '20%' }}>{item.valor}</li>
            <li style={{ width: '20%' }}>{item.descricao}</li>
            <li style={{ width: '20%' }}><FaEdit /></li>
            <li style={{ width: '20%' }}><RiDeleteBin5Fill color='red' onClick={() => deleteItem(item.id)} /></li>
          </ul>
        ))}
      </div>
      <ModalRegister show={showModal} onHide={handleClose} componentType="Despesa" />
    </section>
  );
};

export default ListDespesas;
