

import React from "react";
import styles from "./UserRegistrationPage.module.css"; 

export default function UserRegistrationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <form className={styles.form}>
          <div className={styles.header}>
            <h3 className={styles.title}>Colaborador</h3>
            <p className={styles.subtitle}>
              Cadastre-se agora.
            </p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Nome</label>
            <input
              name="firstName"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu nome"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Sobrenome</label>
            <input
              name="lastName"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu sobrenome"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Data de Nascimento</label>
            <input
              name="birthday"
              type="date"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.genderContainer}>
            <label className={styles.genderLabel}>Gênero</label>
            <div className={styles.genderOption}>
              <input
                type="radio"
                id="masculino"
                name="gender"
                value="Masculino"
                className={styles.radio}
              />
              <label htmlFor="masculino" className={styles.genderLabel}>
                Masculino
              </label>
            </div>
            <div className={styles.genderOption}>
              <input
                type="radio"
                id="feminino"
                name="gender"
                value="Feminino"
                className={styles.radio}
              />
              <label htmlFor="feminino" className={styles.genderLabel}>
                Feminino
              </label>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="Digite seu email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Telefone</label>
            <input
              name="phone"
              type="tel"
              required
              className={styles.input}
              placeholder="Digite seu telefone"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>CPF/CNPJ</label>
            <input
              name="cpfCnpj"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu CPF ou CNPJ"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Endereço</label>
            <input
              name="endereco"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu endereço"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Número</label>
            <input
              name="numero"
              type="text"
              required
              className={styles.input}
              placeholder="Digite o número"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Bairro</label>
            <input
              name="bairro"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu bairro"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Cidade</label>
            <input
              name="cidade"
              type="text"
              required
              className={styles.input}
              placeholder="Digite sua cidade"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Estado</label>
            <input
              name="estado"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu estado"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>CEP</label>
            <input
              name="cep"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu CEP"
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
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Função</label>
            <input
              name="função"
              type="text"
              required
              className={styles.input}
              placeholder="Digite seu função"
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button}>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
