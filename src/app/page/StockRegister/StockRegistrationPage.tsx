import React from "react";
import styles from "./StockRegistrationPage.module.css";

export default function StockRegistrationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <form className={styles.form}>
          <div className={styles.header}>
            <h3 className={styles.title}>Cadastro de Estoque</h3>
            <p className={styles.subtitle}>
              Preencha os detalhes do estoque abaixo.
            </p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>ID do Estoque</label>
            <input
              name="stockId"
              type="text"
              required
              className={styles.input}
              placeholder="Digite o ID do estoque"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Tipo de Equipamento</label>
            <input
              name="equipmentType"
              type="text"
              required
              className={styles.input}
              placeholder="Digite o tipo de equipamento"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Quantidade</label>
            <input
              name="quantity"
              type="number"
              required
              className={styles.input}
              placeholder="Digite a quantidade"
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Cadastrar Estoque
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
