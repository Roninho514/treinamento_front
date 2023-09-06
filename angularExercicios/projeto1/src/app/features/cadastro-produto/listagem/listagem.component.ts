import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { produto, produtos } from '../models/produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private route:Router){
  }

  listProduct : produtos = [];

  ngOnInit(): void {
    this.produtoService.getListProducts().subscribe(produtos =>{
      this.listProduct = produtos;
    });

  }

  public selecionarProduto(produto:produto){
    this.route.navigate(['produto', 'editar-produto', produto.id]);
  }

  public criarProduto(){ 
    this.route.navigate(['produto', 'novo-produto']);
  }

  public deletarProduto(produto:produto){
    this.produtoService.deleteProduct(produto).subscribe(produto =>{
      this.route.navigate(['produto']);
    })
  }

}
