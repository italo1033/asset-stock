import React from "react";
import styles from "./EquipmentRegistrationPage.module.css";

export default function EquipmentRegistrationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <form className={styles.form}>
          <div className={styles.header}>
            <h3 className={styles.title}>Cadastro de Equipamento</h3>
            <p className={styles.subtitle}>
              Preencha os detalhes do equipamento abaixo.
            </p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Nome do Equipamento</label>
            <input
              name="equipmentName"
              type="text"
              required
              className={styles.input}
              placeholder="Digite o nome do equipamento"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Data da Compra</label>
            <input
              name="purchaseDate"
              type="date"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Valor da Compra</label>
            <input
              name="purchaseValue"
              type="number"
              step="0.01"
              required
              className={styles.input}
              placeholder="Digite o valor da compra"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Descrição</label>
            <textarea
              name="description"
              className={styles.textarea}
              placeholder="Digite uma descrição"
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button}>
              Cadastrar Equipamento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
