import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Despesa {
  id: number;
  valor: string;
  descricao: string;
}

const ListDespesas: React.FC<any> = () => {
  const [Despesa, setDespesa] = useState<Despesa[]>([]);

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

  return (
    <section className={styles.containerList}>
      <div className={styles.dados}>
        <ul className={styles.list_dados}>
          <li style={{ width: '20%' }}>id</li>
          <li style={{ width: '20%' }}>valor</li>
          <li style={{ width: '20%' }}>Descrição</li>
        </ul>

        {Despesa.map((item) => (
          <ul key={item.id} className={styles.list_dados_map}>
            <li style={{ width: '20%' }}>{item.id}</li>
            <li style={{ width: '20%' }}>{item.valor}</li>
            <li style={{ width: '20%' }}>{item.descricao}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ListDespesas;
