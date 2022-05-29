import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FilmeListarRoutingModule } from './filme-listar-routing.module';
import { FilmeListarComponent } from './filme-listar/filme-listar.component';



@NgModule({
  declarations: [
    FilmeListarComponent
  ],
  imports: [
    CommonModule,
    FilmeListarRoutingModule,
    MatTableModule
  ]
})
export class FilmeListarModule { }
