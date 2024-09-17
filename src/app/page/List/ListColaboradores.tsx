import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './list.module.css';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IoIosAddCircle } from 'react-icons/io';
import ModalRegister from '@/app/components/modal/modal';

interface Colaborador {
  id: number;
  nome: string;
  data_nascimento: string;
  funcao: string;
  cargo: string;
  genero: string;
}

const ListColaboradores: React.FC<any> = () => {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const response = await axios.get('http://localhost:3001/colaborador/listar');
        setColaboradores(response.data);
      } catch (error) {
        console.error('Erro ao buscar colaboradores:', error);
      }
    };

    fetchColaboradores();
  }, []);

  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/servicos/excluir/${id}`);
      setColaboradores((prevColaborador) => prevColaborador.filter((item) => item.id !== id)); // Atualiza a lista após exclusão
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
          <li style={{ width: '20%' }}>nome</li>
          <li style={{ width: '20%' }}>Funçãoo</li>
          <li style={{ width: '20%' }}>Cargo</li>
          <li style={{ width: '20%' }}>Gênero</li>
          <li style={{ width: '20%' }}></li>
          <li style={{ width: '20%' }}></li>
        </ul>

        {colaboradores.map((item) => (
          <ul key={item.id} className={styles.list_dados_map}>
            <li style={{ width: '20%' }}>{item.id}</li>
            <li style={{ width: '20%' }}>{item.nome}</li>
            <li style={{ width: '20%' }}>{item.cargo}</li>
            <li style={{ width: '20%' }}>{item.funcao}</li>
            <li style={{ width: '20%' }}>{item.genero}</li>
            <li style={{ width: '20%' }}><FaEdit /></li>
            <li style={{ width: '20%' }}><RiDeleteBin5Fill color='red' onClick={() => deleteItem(item.id)} /></li>
          </ul>
        ))}
      </div>
      <ModalRegister show={showModal} onHide={handleClose} componentType="Colaboradores" />
    </section>
  );
};

export default ListColaboradores;
