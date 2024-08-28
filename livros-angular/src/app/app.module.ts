import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService
  ],

})
export class AppModule { }

