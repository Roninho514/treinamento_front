import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { produto } from '../models/produto.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private activatedRoute: ActivatedRoute, private router:Router){}

  id!:string
  produto !: produto
  nome: string = '';
  descricao: string = '';
  preco: string = '';
  estoque: number = 0;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.url[1].path;
    this.produtoService.getProductId(this.id).subscribe((produto: produto) => {
      this.produto = produto
      this.nome = this.produto.nome;
      this.descricao = this.produto.descricao;
      this.preco = this.produto.preco;
      this.estoque = this.produto.estoque;
    })
  }

  salvarProduto(){
    const produtoParaSalvar ={
      id: parseInt(this.id),
      nome: this.nome,
      preco: this.preco,
      imagemUrl: this.produto.imagemUrl,
      descricao : this.descricao,
      estoque : this.estoque
    }

    this.produtoService.updateProduct(produtoParaSalvar).subscribe(response =>{
      this.router.navigate(['produto', 'listagem']);
    })
  }

}
