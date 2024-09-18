import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IoIosAddCircle } from 'react-icons/io';
import ModalRegister from '@/app/components/modal/modal';

interface Estoque {
  id: number;
  descricao: string;
  valor_de_compra: string;
  data_compra: string;
}

const ListEstoque: React.FC<any> = () => {
  const [Estoque, setEstoque] = useState<Estoque[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const fetchEstoque = async () => {
      try {
        const response = await axios.get('http://localhost:3001/equipamentos/listar');
        setEstoque(response.data);
      } catch (error) {
        console.error('Erro ao buscar Estoque:', error);
      }
    };

    fetchEstoque();
  }, []);

  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/equipamento/excluir/${id}`);
      setEstoque((prevEstoque) => prevEstoque.filter((item) => item.id !== id)); // Atualiza a lista após exclusão
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
          <li style={{ width: '20%' }}>Equipamento</li>
          <li style={{ width: '20%' }}>Valor</li>
          <li style={{ width: '20%' }}>Data de Compra</li>
          <li style={{ width: '20%' }}></li>
          <li style={{ width: '20%' }}></li>
        </ul>

        {Estoque.map((item) => (
          <ul key={item.id} className={styles.list_dados_map}>
            <li style={{ width: '20%' }}>{item.id}</li>
            <li style={{ width: '20%' }}>{item.descricao}</li>
            <li style={{ width: '20%' }}>R${item.valor_de_compra}</li>
            <li style={{ width: '20%' }}>{item.data_compra}</li>
            <li style={{ width: '20%' }}><FaEdit /></li>
            <li style={{ width: '20%' }}><RiDeleteBin5Fill color='red' onClick={() => deleteItem(item.id)} /></li>
          </ul>
        ))}
      </div>
      <ModalRegister show={showModal} onHide={handleClose} componentType="Equipamento" />
    </section>
  );
};

export default ListEstoque;
