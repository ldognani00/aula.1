import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
   path: "",
  loadChildren: () => import('./lista-module'). then(m => m.ListaModule)
}
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRoutingModule {}
