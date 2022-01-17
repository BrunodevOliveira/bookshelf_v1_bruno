import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'feed'}, //pathMatch verifica o caminho completo e redirectTo redireciona p feed
  {
    path: 'feed',
    component: FeedComponent,
  },

  {
    path: 'cdd', loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
