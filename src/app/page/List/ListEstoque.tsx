import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Estoque {
  id: number;
  equipamento: string;
  quantidade: string;
}

const ListEstoque: React.FC<any> = () => {
  const [Estoque, setEstoque] = useState<Estoque[]>([]);

  useEffect(() => {
    const fetchEstoque = async () => {
      try {
        const response = await axios.get('http://localhost:3001/estoque/listar');
        setEstoque(response.data);
      } catch (error) {
        console.error('Erro ao buscar Estoque:', error);
      }
    };

    fetchEstoque();
  }, []);

  return (
    <section className={styles.containerList}>
      <div className={styles.dados}>
        <ul className={styles.list_dados}>
          <li style={{ width: '20%' }}>id</li>
          <li style={{ width: '20%' }}>Equipamento</li>
          <li style={{ width: '20%' }}>Quantidade</li>
        </ul>

        {Estoque.map((item) => (
          <ul key={item.id} className={styles.list_dados_map}>
            <li style={{ width: '20%' }}>{item.id}</li>
            <li style={{ width: '20%' }}>{item.equipamento}</li>
            <li style={{ width: '20%' }}>{item.quantidade}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ListEstoque;
