import React from "react";
import styles from "./ServiceOrderRegistrationPage.module.css";

export default function ServiceOrderRegistrationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <form className={styles.form}>
          <div className={styles.header}>
            <h3 className={styles.title}>Registrar Ordem de Serviço</h3>
            <p className={styles.subtitle}>
              Preencha os detalhes da ordem de serviço abaixo.
            </p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Número da OS</label>
            <input
              name="serviceOrderNumber"
              type="text"
              required
              className={styles.input}
              placeholder="Digite o número da OS"
            />
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
            <label className={styles.label}>Descrição do Problema</label>
            <textarea
              name="issueDescription"
              className={styles.textarea}
              placeholder="Descreva o problema encontrado"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Técnico Responsável</label>
            <input
              name="technician"
              type="text"
              required
              className={styles.input}
              placeholder="Digite o nome do técnico"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Status</label>
            <select name="status" className={styles.select}>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluída">Concluída</option>
              <option value="Pendente">Pendente</option>
            </select>
          </div>

          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button}>
              Registrar OS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
