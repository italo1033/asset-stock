import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <section className={styles.containerList}>
      <div className={styles.dados}>
        <ul className={styles.list_dados}>
          <li style={{ width: '20%' }}>id</li>
          <li style={{ width: '20%' }}>nome</li>
          <li style={{ width: '20%' }}>Função</li>
          <li style={{ width: '20%' }}>Cargo</li>
          <li style={{ width: '20%' }}>Gênero</li>
        </ul>

        {colaboradores.map((item) => (
          <ul key={item.id} className={styles.list_dados_map}>
            <li style={{ width: '20%' }}>{item.id}</li>
            <li style={{ width: '20%' }}>{item.nome}</li>
            <li style={{ width: '20%' }}>{item.cargo}</li>
            <li style={{ width: '20%' }}>{item.funcao}</li>
            <li style={{ width: '20%' }}>{item.genero}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ListColaboradores;
