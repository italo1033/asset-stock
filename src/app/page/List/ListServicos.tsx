import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";

interface Servicos {
  id: number;
  servico: string;
  id_usuario:string;
  id_Status: string;
}

const ListServicos: React.FC<any> = () => {
  const [Servicos, setServicos] = useState<Servicos[]>([]);

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

  const deleteItem = async (id:number) => {
    try {
      const response = await axios.delete(`http://localhost:3001/servicos/excluir/${id}`);
      console.log('Item excluído com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao excluir o item:', error);
    }
  };

  return (
    <section className={styles.containerList}>
      <div className={styles.dados}>
        <div className={styles.add}><IoIosAddCircle size={30} /></div>
        <ul className={styles.list_dados}>
          <li style={{ width: '20%' }}>id</li>
          <li style={{ width: '20%' }}>Serviços</li>
          <li style={{ width: '20%' }}>Responsavel</li>
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
            <li style={{ width: '20%' }}><FaEdit  /></li>
            <li style={{ width: '20%' }}><RiDeleteBin5Fill color='red' onClick={()=>deleteItem(item.id)} /></li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ListServicos;
