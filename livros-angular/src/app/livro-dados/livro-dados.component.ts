// livro-dados.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro, LivroSemId } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro('',0, '', '',[]);
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = async () => {
    // Cria o livro sem _id
    const livroParaIncluir: LivroSemId = {
      codEditora: this.livro.codEditora,
      titulo: this.livro.titulo,
      resumo: this.livro.resumo,
      autores: this.autoresForm.split('\n').map(autor => autor.trim())
    };

    // Chama o serviço para incluir o livro
    const sucesso = await this.servLivros.incluirLivro(livroParaIncluir);

    if (sucesso) {
      this.router.navigateByUrl('/lista');
    } else {
      alert('Erro ao incluir o livro. Tente novamente.');
    }
  };
}
