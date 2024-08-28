// controle-livros.service.ts
import { Injectable } from '@angular/core';
import { Livro, LivroSemId } from './livro';
import { ControleEditoraService } from './controle-editora.service';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  baseURL = 'http://localhost:3030/livros';
  private controleEditora = new ControleEditoraService();

  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(this.baseURL);
    const livros: Livro[] = await resposta.json();

    return livros.map((livro) => ({
      ...livro,
      nomeEditora: this.controleEditora.getNomeEditora(livro.codEditora),
    }));
  }

  async incluirLivro(livro: LivroSemId): Promise<boolean> {
    const resposta = await fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });
    return resposta.ok;
  }

  async excluirLivro(id: string): Promise<boolean> {
    const resposta = await fetch(`${this.baseURL}/${id}`, {
      method: 'DELETE',
    });
    return resposta.ok;
  }
}
