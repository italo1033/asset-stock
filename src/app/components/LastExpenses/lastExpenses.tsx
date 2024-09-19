import React, { useState, useEffect } from 'react';
import styles from './lastExpenses.module.css';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

interface LastExpensesProps {
  onViewAllExpenses: () => void;
}

interface Despesa {
  id: number;
  valor: number;
  descricao: string;
  id_usuario: number;
  id_tipo_despesa: number;
}

const LastExpenses: React.FC<LastExpensesProps> = ({ onViewAllExpenses }) => {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDespesas = async () => {
      try {
        const response = await fetch('http://localhost:3001/despesa/listar');
        if (!response.ok) {
          throw new Error('Erro ao buscar despesas');
        }
        const data: Despesa[] = await response.json();
        setDespesas(data);
      } catch (error) {
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDespesas();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  return (
    <section className={styles.lastExpenses}>
      <div className={styles.contentTitle}>
        <h3 className={styles.title}>Últimas Despesas</h3>
      </div>
      <div className={styles.containerDespesas}>
        {despesas.length > 0 ? (
          despesas.map((despesa) => (
            <div key={despesa.id} className={styles.itemDespesas}>
              <div className={styles.datelhesDespesas}>
                <RiMoneyDollarCircleFill size={40} />
                <div className={styles.descricaodespesas}>
                  <span style={{fontSize:13, fontWeight:'bold', color:"#000"}}>{despesa.descricao}</span>
                  <span>Variável</span>
                </div>
              </div>
              <div>
                R$<span>{despesa.valor}</span>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noDespesas}>Nenhuma despesa encontrada</p>
        )}

        <div className={styles.containerButton}>
          <button className={styles.buttonDespesas} onClick={onViewAllExpenses}>
            Visualizar todas despesas
          </button>
        </div>
      </div>
    </section>
  );
};

export default LastExpenses;
