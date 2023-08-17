import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor(private produtoService: ProdutoService){

  }
  ngOnInit(): void {
    this.produtoService.getCidadePeloCep().subscribe(resposta =>{
      console.log(resposta);
    });
  }

}
