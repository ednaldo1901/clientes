import { ControleEditora } from "./ControleEditora";

interface Livro {
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
  
}

const baseURL = 'http://localhost:3030/livros';

export class ControleLivros {
  private controleEditora = new ControleEditora();

  async obterLivros() {
      const resposta = await fetch(baseURL);
      const livros: Livro[] = await resposta.json();

      return livros.map((livro) => {
          return {
              ...livro,
              nomeEditora: this.controleEditora.getNomeEditora(livro.codEditora)
          };
      });
  }

  async incluirLivro(livro: Livro) {
      const resposta = await fetch(baseURL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(livro),
      });
      return resposta.ok;
  }

  async excluirLivro(id: string) {
      const resposta = await fetch(`${baseURL}/${id}`, {
          method: 'DELETE',
      });
      return resposta.ok;
  }
}


