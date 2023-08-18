import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path: '', redirectTo: 'listagem', pathMatch: 'full'},
  {path: 'listagem', component: ListagemComponent},
  {path: 'novo-produto', component: CadastroComponent},
  {path: 'editar-produto/:id' , component: CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroProdutoRoutingModule { }
