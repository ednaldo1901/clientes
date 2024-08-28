import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LivroListaComponent,CommonModule,LivroDadosComponent,RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'livros-angular';
}
