import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({

    //Instâncio duas variáveis com o FormControl e passo em seus argumentos as validações que eu quero
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)

  });

  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo:string,
    private autenticacaoFirebaseService:AutenticacaoFirebaseService
    ) {}


    get email() {
      return this.formularioLogin.get('email')
    }

    get senha() {
      return this.formularioLogin.get('senha')
    }

  onSubmit(): void {
  }
}
