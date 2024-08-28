// livro-lista.component.ts
import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  async ngOnInit(): Promise<void> {
    this.editoras = this.servEditora.getEditoras();
    this.livros = await this.servLivros.obterLivros();
  }

  async excluir(id: string): Promise<void> {
    if (id) {
      const sucesso = await this.servLivros.excluirLivro(id);
      if (sucesso) {
        this.livros = await this.servLivros.obterLivros();
      } else {
        alert('Erro ao excluir o livro. Tente novamente.');
      }
    }
  }

  obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
