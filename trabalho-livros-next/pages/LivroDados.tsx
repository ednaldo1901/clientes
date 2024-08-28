import React, { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';

const controleEditora = new ControleEditora();

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState<number>(
    controleEditora.getEditoras()[0].codEditora
  );

  const incluirLivro = async (livro: Livro) => {
    const response = await fetch('/api/livros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });
    return response.ok;
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const livro: Livro = {
      codigo: "",
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
      
    };
    incluirLivro(livro).then(() => Router.push('/LivroLista'));
  };

  return (
    <div className={styles.containers}>
      <Head>
        <title>Loja Next - Novo Livro</title>
      </Head>
      <main className={styles.mainDados}>
        <h1 className={styles.title}>Cadastrar Novo Livro</h1>
        <form onSubmit={incluir}>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              className="form-control mt-2"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="resumo">Resumo</label>
            <textarea
              className="form-control mt-2"
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="autores">Autores (um por linha)</label>
            <textarea
              className="form-control mt-2"
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editora">Editora</label>
            <select
              className="form-control mt-2"
              id="editora"
              value={codEditora}
              onChange={(e) => setCodEditora(Number(e.target.value))}>
              {controleEditora.getEditoras().map((editora) => (
                <option key={editora.codEditora} value={editora.codEditora}>
                  {editora.nome}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Salvar
          </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
