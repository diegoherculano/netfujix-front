import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../../filme.model';
import { FilmeService } from '../../filme.service';

@Component({
  selector: 'app-filme-listar',
  templateUrl: './filme-listar.component.html',
  styleUrls: ['./filme-listar.component.css']
})
export class FilmeListarComponent implements OnInit {
  filmes$: Observable<Filme[]> | undefined

  colunasTabela = ['id', 'titulo', 'genero']

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.listarFilmes()
  }

  listarFilmes() {
    this.filmes$ = this.filmeService.listar();
  }
}
