import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista/ex1', pathMatch: 'full' },
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista-module').then(m => m.ListaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }