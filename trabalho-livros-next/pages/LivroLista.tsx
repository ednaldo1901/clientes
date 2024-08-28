import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { LinhaLivro } from '../components/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';

const LivroLista = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    try {
      const response = await fetch('/api/livros');
      const dados = await response.json();
      if (Array.isArray(dados)) {
        setLivros(dados);
      } else {
        console.error('Dados retornados não são um array:', dados);
        setLivros([]);
      }
      setCarregado(true);
    } catch (error) {
      console.error('Erro ao obter livros:', error);
    }
  };

  const excluirLivro = async (id: string) => {
    console.log(`Código do livro a ser excluído: ${id}`);
    const response = await fetch(`/api/livros/${id}`, {
      method: 'DELETE',
    });
    return response.ok;
  };

  const excluir = (id: string) => {
    excluirLivro(id).then(() => setCarregado(false));
  };

  useEffect(() => {
    if (!carregado) {
      obterLivros();
    }
  }, [carregado]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next - Catálogo</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Catálogo de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
              <th>Editora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(livros) && livros.map(livro => (
              <LinhaLivro
                key={livro._id}
                livro={livro}
                excluir={excluir}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;

