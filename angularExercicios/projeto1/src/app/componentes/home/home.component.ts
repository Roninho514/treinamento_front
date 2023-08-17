import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter, map, of, tap } from 'rxjs';
import { HomeService } from '../services/home.service';

export interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  salario: string;
}

export interface Pessoas extends Array<Pessoa>{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /* frutas: string[] = [];
  frutas$ = of('banana', 'morango', 'abacaxi', 'pera', 'melancia') ; */

  constructor( private homeService: HomeService ){
    /* this.frutas$.pipe(
      tap(console.log),
      map(fruta => fruta.toUpperCase()),
      tap(console.log),
      filter(fruta => fruta.startsWith('B') || fruta.startsWith('M'))
    ).subscribe(resultado =>{
      this.frutas.push(resultado);
    }); */
  }

  clientes!: Pessoas;
  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario'];
  dataSource !: MatTableDataSource<any>;

  ngOnInit(){
    this.homeService.getClientes()
    .subscribe(clientes =>{
      this.clientes = clientes;
      this.dataSource = new MatTableDataSource(this.clientes);
    })
  }
}
