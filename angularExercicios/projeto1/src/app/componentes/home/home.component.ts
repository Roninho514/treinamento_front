import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clientes= [
    {
      nome:'Alexandre',
      sexo: 'm',
      idade: 20,
      salario: '10000'
    },
    {
      nome:'Fernanda',
      sexo: 'f',
      idade: 25,
      salario: '15000'
    },
    {
      nome:'Ana',
      sexo: 'F',
      idade: 30,
      salario: '20000'
    }
    ,{
      nome:'Luiz',
      sexo: 'm',
      idade: 23,
      salario: '30000'
    }
  ]
}
