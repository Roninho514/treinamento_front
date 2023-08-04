import { Component } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor( private autenticacaoService: AutenticacaoService){
  }

  ngOnInit(){

  }

  login() {
    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe(()=> {
      console.log('Autenticado com sucesso!');
    },(error)=>{
      alert('Usuario ou senha inválida!');
      console.log(error);
    });
  }
}
