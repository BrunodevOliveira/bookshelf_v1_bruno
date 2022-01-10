import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'cdd'}, //pathMatch verifica o caminho completo e redirectTo redireciona p cdd
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(m => m.CddModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
