import React from "react";
import styles from "./ExpenseRegistrationPage.module.css";

export default function ExpenseRegistrationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <form className={styles.form}>
          <div className={styles.header}>
            <h3 className={styles.title}>Registro de Despesa</h3>
            <p className={styles.subtitle}>
              Preencha os detalhes da despesa abaixo.
            </p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Valor da Despesa</label>
            <input
              name="expenseAmount"
              type="number"
              required
              className={styles.input}
              placeholder="Digite o valor da despesa"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Descrição</label>
            <textarea
              name="description"
              required
              className={styles.textarea}
              placeholder="Descreva a despesa"
            />
          </div>

          <button type="submit" className={styles.button}>
            Registrar Despesa
          </button>
        </form>
      </div>
    </div>
  );
}
