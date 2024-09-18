import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './UserRegistrationPage.module.css';

interface FormData {
  nome: string;
  data_nascimento: string;
  genero: string;
  cpf: string;
  telefone: string;
  cargo: string;
  funcao: string;
}

const UserRegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    data_nascimento: '',
    genero: '',
    cpf: '',
    telefone: '',
    cargo: '',
    funcao: '',
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

    try {
      const response = await fetch('http://localhost:3001/colaborador/adicionar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados');
      }

      const result = await response.json();
      console.log('Colaborador registrado com sucesso:', result);
      // Optionally, reset the form or show a success message
      setFormData({
        nome: '',
        data_nascimento: '',
        genero: '',
        cpf: '',
        telefone: '',
        cargo: '',
        funcao: '',
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
            <h3 className={styles.title}>Colaborador</h3>
            <p className={styles.subtitle}>
              Cadastre-se agora.
            </p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Nome</label>
            <input
              name="nome"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Data de Nascimento</label>
            <input
              name="data_nascimento"
              type="date"
              required
              className={styles.input}
              value={formData.data_nascimento}
              onChange={handleChange}
            />
          </div>

          <div className={styles.genderContainer}>
            <label className={styles.genderLabel}>Gênero</label>
            <div className={styles.genderOption}>
              <input
                type="radio"
                id="masculino"
                name="genero"
                value="Masculino"
                className={styles.radio}
                checked={formData.genero === 'Masculino'}
                onChange={handleChange}
              />
              <label htmlFor="masculino" style={{ marginLeft: 5 }} className={styles.genderLabel}>
                Masculino
              </label>
            </div>
            <div className={styles.genderOption}>
              <input
                type="radio"
                id="feminino"
                name="genero"
                value="Feminino"
                className={styles.radio}
                checked={formData.genero === 'Feminino'}
                onChange={handleChange}
              />
              <label htmlFor="feminino" style={{ marginLeft: 5 }} className={styles.genderLabel}>
                Feminino
              </label>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>CPF</label>
            <input
              name="cpf"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu CPF"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Telefone</label>
            <input
              name="telefone"
              type="tel"
              required
              className={styles.input}
              placeholder="Digite seu telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Cargo</label>
            <input
              name="cargo"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu cargo"
              value={formData.cargo}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Função</label>
            <input
              name="funcao"
              type="text"
              required
              className={styles.input}
              placeholder="Digite sua função"
              value={formData.funcao}
              onChange={handleChange}
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationPage;
