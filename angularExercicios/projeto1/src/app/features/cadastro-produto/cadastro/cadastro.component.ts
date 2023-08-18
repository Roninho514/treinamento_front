import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { produto } from '../models/produto.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private activatedRoute: ActivatedRoute){}

  id!:string
  produto !: produto

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.url[1].path;
    this.produtoService.getProductId(this.id).subscribe((produto: produto) => {
      this.produto = produto
    })
  }

}
