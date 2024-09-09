import React, { useState } from 'react';
import styles from './lastExpenses.module.css';
import { RiMoneyDollarCircleFill } from "react-icons/ri";


const LastExpenses: React.FC<any> = () => {


  return (
    <section className={styles.lastExpenses}>
        <div className={styles.contentTitle} >
          <h3 className={styles.title}>Últimas Despesas</h3>
        </div>
        <div className={styles.containerDespesas}>
            <div className={styles.itemDespesas}>
                <div className={styles.datelhesDespesas}>
                    <RiMoneyDollarCircleFill size={40} />
                    <div className={styles.descricaodespesas}>
                        <h5>Compra de Etiquetas</h5>
                        <span>Variável</span>
                    </div>
                </div>
                <div>
                    R$<span>2000</span>
                </div>
            </div>

            <div className={styles.itemDespesas}>
                <div className={styles.datelhesDespesas}>
                    <RiMoneyDollarCircleFill size={40} />
                    <div className={styles.descricaodespesas}>
                        <h5>Compra de Etiquetas</h5>
                        <span>Variável</span>
                    </div>
                </div>
                <div>
                    R$<span>2000</span>
                </div>
            </div>

            <div className={styles.itemDespesas}>
                <div className={styles.datelhesDespesas}>
                    <RiMoneyDollarCircleFill size={40} />
                    <div className={styles.descricaodespesas}>
                        <h5>Compra de Etiquetas</h5>
                        <span>Variável</span>
                    </div>
                </div>
                <div>
                    R$<span>2000</span>
                </div>
            </div>

            

            <div className={styles.containerButton}>
                <button className={styles.buttonDespesas}>
                    Visualizar todas despesas
                </button>
            </div>


            
        </div>
    </section>
  );
};

export default LastExpenses;