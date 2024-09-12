import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Servicos {
  id: number;
  servico: string;
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

  return (
    <section className={styles.containerList}>
      <div className={styles.dados}>
        <ul className={styles.list_dados}>
          <li style={{ width: '20%' }}>id</li>
          <li style={{ width: '20%' }}>Serviços</li>
        </ul>

        {Servicos.map((item) => (
          <ul key={item.id} className={styles.list_dados_map}>
            <li style={{ width: '20%' }}>{item.id}</li>
            <li style={{ width: '20%' }}>{item.servico}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ListServicos;
