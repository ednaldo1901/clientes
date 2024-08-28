import React, { useEffect, useState } from 'react';
import { ControleLivros } from './controle/ControleLivros';

const controleLivros = new ControleLivros();

function LivroLista() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const livrosObtidos = await controleLivros.obterLivros(); // Alteração aqui
      setLivros(livrosObtidos);
    }
    fetchData();
  }, []);

  const handleExcluir = async (id) => {
    try {
      const sucesso = await controleLivros.excluirLivro(id); // Alteração aqui
      if (sucesso) {
        setLivros(livros.filter(livro => livro._id !== id));
      } else {
        console.error('Erro ao excluir o livro');
      }
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
    }
  };

    return (
      <>
      <h1>Catalogo de livros</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Resumo</th>
                    <th>Editora</th>
                    <th>Autores</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {livros.map((livro, index) => (
                    <tr key={index}>
                        <td>{livro.titulo}</td>
                        <td>{livro.resumo}</td>
                        <td>{livro.nomeEditora}</td>
                        <td>{livro.autores.join(', ')}</td>
                        <td>
                        <button 
                            className="btn btn-danger" 
                            onClick={() => handleExcluir(livro._id)}
                        >
                            Excluir
                        </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </>
    );
};

export default LivroLista;





    
