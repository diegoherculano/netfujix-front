import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeListarComponent } from './filme-listar/filme-listar.component';

const routes: Routes = [{
  path: "", component: FilmeListarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmeListarRoutingModule { }
