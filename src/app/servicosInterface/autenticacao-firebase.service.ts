import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
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

  cadastrarUsuario(nome: string, email: string, senha: string, url: string){
    return from(createUserWithEmailAndPassword(this.usuarioFb, email, senha)).pipe(
      switchMap(({user}) => updateProfile(user, {displayName: nome, photoURL: url}))
    )
  }
}
