import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroProdutoRoutingModule } from './cadastro-produto-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutoRoutingModule,
    MatCardModule,
    MatButtonModule


  ]
})
export class CadastroProdutoModule { }
