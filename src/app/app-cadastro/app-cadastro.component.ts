import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

//Pode ser utilizada dentro e fora do cadastro
export function passwordMatchValidator(): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value
    const confirmar = control.get('confirmaSenha')?.value

    if(senha && confirmar && senha !== confirmar){
      return {
        senhaConfirmada: true
      }
    }
    return null
  }
}

@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.scss']
})
export class AppCadastroComponent implements OnInit {

  formularioCadastro = this.loginBuilder.group({

    //Instâncio duas variáveis com o FormControl e passo em seus argumentos as validações que eu quero
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    confirmaSenha: new FormControl('', Validators.required),

  },{validador: passwordMatchValidator()})

  constructor(
    private loginBuilder: FormBuilder
  ) { }

  get email() {
    return this.formularioCadastro.get('email')
  }

  get senha() {
    return this.formularioCadastro.get('senha')
  }


  get confirmaSenha() {
    return this.formularioCadastro.get('confirmaSenha')
  }

  enviaCadastro() {
    alert('Enviado!')
  }

  ngOnInit(): void {
  }

}
