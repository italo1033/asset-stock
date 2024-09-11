import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  Atributo1: string;
  Atributo2: string;
  Atributo3: string;
  Atributo4: string;
  Atributo5: string;
  typeSolicitação: string;
}

interface Colaborador {
  id: number;
  nome: string;
  data_nascimento: string;
  funcao: string;
  cargo: string;
  genero: string;
}

const ListColaboradores: React.FC<Props> = ({ Atributo1, Atributo2, Atributo3, Atributo4, Atributo5, typeSolicitação }) => {
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
          <li style={{ width: '20%' }}>{Atributo1}</li>
          <li style={{ width: '20%' }}>{Atributo2}</li>
          <li style={{ width: '20%' }}>{Atributo3}</li>
          <li style={{ width: '20%' }}>{Atributo4}</li>
          <li style={{ width: '20%' }}>{Atributo5}</li>
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
