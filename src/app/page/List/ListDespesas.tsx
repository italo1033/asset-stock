import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  Atributo1: string;
  Atributo2: string;
  Atributo3: string;
}

interface Despesa {
  id: number;
  valor: string;
  descricao: string;
}

const ListDespesas: React.FC<Props> = ({ Atributo1, Atributo2, Atributo3 }) => {
  const [colaboradores, setColaboradores] = useState<Despesa[]>([]);

  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const response = await axios.get('http://localhost:3001/despesa/listar');
        setColaboradores(response.data);
      } catch (error) {
        console.error('Erro ao buscar colaboradores:', error);
      }
    };

    fetchColaboradores();
  }, []);

  return (
    <section className={styles.containerList}>
      <div className={styles.dados}>
        <ul className={styles.list_dados}>
          <li style={{ width: '20%' }}>{Atributo1}</li>
          <li style={{ width: '20%' }}>{Atributo2}</li>
          <li style={{ width: '20%' }}>{Atributo3}</li>
        </ul>

        {colaboradores.map((item) => (
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
