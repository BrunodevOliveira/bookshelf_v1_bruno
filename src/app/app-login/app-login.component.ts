import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

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

  hasUnitNumber = false
  tentativas = 0
  captcha!: string

  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo:string,
    private toast: HotToastService,
    private rotas: Router,
    private autenticacaoFirebaseService:AutenticacaoFirebaseService
  ) {}


  get email() {
    return this.formularioLogin.get('email')
  }

  get senha() {
    return this.formularioLogin.get('senha')
  }

  loginFirebase() {
    if(!this.formularioLogin.valid){
      this.tentativas++
      this.captcha = ''
      return
    }
    const {email, senha} = this.formularioLogin.value
    this.autenticacaoFirebaseService.loginUsuario(email, senha)
    .pipe(
      this.toast.observe({
        success: 'Login válido',
        loading: 'Redirecionando para aplicação',
        error: 'Algo deu errado, confira as informações'
      })
    ).subscribe(() => {
      this.rotas.navigate(['/cdd'])
      this.tentativas = 0
    })
    setTimeout(() => {
      this.tentativas++
      this.captcha = ''
    }, 700)
  }

  resolverCaptcha(resposta: string) {
    this.captcha = resposta
    this.tentativas = 0
    // console.log('resolve Recaptcha', resposta)
  }

  onSubmit(): void {
  }
}
