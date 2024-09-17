import React, { useState, FormEvent } from "react";
import styles from "./ExpenseRegistrationPage.module.css";

export default function ExpenseRegistrationPage() {
  // Definindo os estados para os campos do formulário
  const [expenseAmount, setExpenseAmount] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [expenseType, setExpenseType] = useState('Fixa'); // Tipo de despesa

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === 'expenseAmount') {
      setExpenseAmount(Number(value));
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'expenseType') {
      setExpenseType(value);
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Corpo da requisição
    const requestBody = {
      valor: expenseAmount,
      descricao: description,
      id_usuario: 1, // Ajuste conforme necessário
      id_tipo_despesa: expenseType === 'Fixa' ? 1 : expenseType === 'Compra' ? 2 : 3 // Ajuste conforme necessário
    };

    try {
      const response = await fetch('http://localhost:3001/despesa/adicionar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Erro ao registrar despesa');
      }

      alert('Despesa registrada com sucesso!');
      // Limpar os campos do formulário após o sucesso, se necessário
      setExpenseAmount('');
      setDescription('');
      setExpenseType('Fixa');
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao registrar a despesa.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
              value={expenseAmount}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Digite o valor da despesa"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Descrição</label>
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              required
              className={styles.textarea}
              placeholder="Descreva a despesa"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Tipo de Despesa</label>
            <select
              name="expenseType"
              value={expenseType}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="Fixa">Fixa</option>
              <option value="Compra">Compra</option>
              <option value="Variavel">Variável</option>
            </select>
          </div>

          <button type="submit" className={styles.button}>
            Registrar Despesa
          </button>
        </form>
      </div>
    </div>
  );
}
