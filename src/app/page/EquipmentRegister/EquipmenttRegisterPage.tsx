import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './EquipmentRegistrationPage.module.css';

interface FormData {
  equipmentName: string;
  purchaseDate: string;
  purchaseValue: string;
  description: string;
}

const EquipmentRegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    equipmentName: '',
    purchaseDate: '',
    purchaseValue: '',
    description: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const purchaseDate = new Date(formData.purchaseDate).toISOString();

    const data = {
      descricao: formData.description,
      valor_de_compra: parseFloat(formData.purchaseValue),
      data_compra: purchaseDate
    };

    try {
      const response = await fetch('http://localhost:3001/equipamentos/adicionar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados');
      }

      const result = await response.json();
      console.log('Equipamento cadastrado com sucesso:', result);
      // Optionally, reset the form or show a success message
      setFormData({
        equipmentName: '',
        purchaseDate: '',
        purchaseValue: '',
        description: ''
      });
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
              value={formData.equipmentName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Data da Compra</label>
            <input
              name="purchaseDate"
              type="date"
              required
              className={styles.input}
              value={formData.purchaseDate}
              onChange={handleChange}
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
              value={formData.purchaseValue}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Descrição</label>
            <textarea
              name="description"
              className={styles.textarea}
              placeholder="Digite uma descrição"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Cadastrar Equipamento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EquipmentRegistrationPage;
