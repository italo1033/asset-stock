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
            <label className={styles.label}>Tipo de Equipamento</label>
            <input
              name="equipmentType"
              type="text"
              required
              className={styles.input}
              placeholder="Digite o tipo do equipamento"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Marca</label>
            <input
              name="brand"
              type="text"
              required
              className={styles.input}
              placeholder="Digite a marca"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Modelo</label>
            <input
              name="model"
              type="text"
              required
              className={styles.input}
              placeholder="Digite o modelo"
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
            <label className={styles.label}>Status</label>
            <select name="status" className={styles.select} required>
              <option value="disponivel">Disponível</option>
              <option value="em_uso">Em uso</option>
              <option value="em_manutencao">Em manutenção</option>
            </select>
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
