import React from 'react';
import { Livro } from '../classes/modelo/Livro';
import { controleEditora } from '../classes/controle/ControleEditora';

interface LinhaLivroProps {
  livro: Livro;
  excluir: (_id: string) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
      <td>{props.livro.titulo}</td>
      <td>{props.livro.resumo}</td>
      <td>{props.livro.autores.join(', ')}</td>
      <td>{nomeEditora}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => props.excluir(props.livro._id)}>
          Excluir
        </button>
      </td>
    </tr>
  );
};
