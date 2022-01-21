import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authState } from 'rxfire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoFirebaseService {

  //Verifica qual é o Estado da autenticação. Olha qual o usuário está logado e entrega apenas os dados do usuário autenticado e armazena no Observable "usuarioLogado$"
  usuarioLogado$ = authState(this.usuarioFb)

  constructor(
    private usuarioFb: Auth,

    ) { }

  loginUsuario(usuarioEmail: string, usuarioSenha: string) {
    return from(signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha ))
  }

  sairLogin() {
    return from(this.usuarioFb.signOut())
  }
}
