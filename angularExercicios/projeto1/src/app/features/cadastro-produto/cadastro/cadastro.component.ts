import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { produto } from '../models/produto.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private activatedRoute: ActivatedRoute, private router:Router, private formBuilder :FormBuilder){}

  id!:string
  produto !: produto
  rote: string = '';
  title: string = 'Cadastro produto';

  formCadastroProduto !: FormGroup;

  ngOnInit(): void {
    this.rote = this.activatedRoute.snapshot.url[0].path;
    this.criarFormulario();
    if(this.rote == 'editar-produto'){
      this.id = this.activatedRoute.snapshot.url[1].path;
      this.produtoService.getProductId(this.id).subscribe((produto: produto) => {
        this.produto = produto
        this.formCadastroProduto.controls['nome'].setValue(this.produto.nome)
        this.formCadastroProduto.controls['descricao'].setValue(this.produto.descricao)
        this.formCadastroProduto.controls['estoque'].setValue(this.produto.estoque)
        this.formCadastroProduto.controls['preco'].setValue(this.produto.preco)
      })
      this.title = 'Editar produto';
    }
  }

  criarFormulario(){
    this.formCadastroProduto = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
      estoque: [0, Validators.required]
    })
  }


  salvarProduto(){
    console.log(this.formCadastroProduto.value);
    /* const produtoParaSalvar : produto ={
      id: parseInt(this.id),
      nome: this.nome,
      preco: this.preco,
      descricao : this.descricao,
      estoque : this.estoque
    }
    if(this.rote == 'editar-produto'){
      this.atualizarProduto(produtoParaSalvar);
    
    }
    else{
    } */
    
    this.criarProduto(this.formCadastroProduto.value);
  }

  /* atualizarProduto(produtoParaSalvar : produto){
    produtoParaSalvar.imagemUrl = this.produto.imagemUrl;
    this.produtoService.updateProduct(produtoParaSalvar).subscribe(response =>{
      this.router.navigate(['produto', 'listagem']);
    })
  } */

  criarProduto(produtoParaSalvar : produto){
    this.produtoService.createProduct(produtoParaSalvar).subscribe(response =>{
      this.router.navigate(['produto', 'listagem']);
    })
  
  }

}
