import React, { useState, FormEvent } from 'react';
import styles from './ServiceOrderRegistrationPage.module.css';

interface FormData {
  serviceOrderNumber: string;
  equipmentName: string;
  issueDescription: string;
  technician: string;
  status: string;
}

const ServiceOrderRegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    serviceOrderNumber: '',
    equipmentName: '',
    issueDescription: '',
    technician: '',
    status: 'Em andamento',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      descricao: formData.issueDescription,
      equipamento: formData.equipmentName,
      dtabertura: new Date().toISOString(),
      dtfechamento: null,
      id_usuario: 1,
      id_Status: 1
    };

    try {
      const response = await fetch('http://localhost:3001/servicos/adicionar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Erro ao registrar ordem de serviço');
      }

      alert('Ordem de serviço registrada com sucesso!');
      window.location.reload()
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao registrar a ordem de serviço.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
              value={formData.serviceOrderNumber}
              onChange={handleChange}
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
              value={formData.equipmentName}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Digite o nome do equipamento"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Descrição do Problema</label>
            <textarea
              name="issueDescription"
              value={formData.issueDescription}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Descreva o problema encontrado"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Técnico Responsável</label>
            <input
              name="technician"
              type="text"
              value={formData.technician}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Digite o nome do técnico"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="Em andamento">Em andamento</option>
              <option value="Concluída">Concluída</option>
              <option value="Pendente">Pendente</option>
            </select>
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Registrar OS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceOrderRegistrationPage;
