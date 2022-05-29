export interface Filme {
  id: number,
  titulo: string,
  duracao: string,
  sinopse: string,
  ano: string,
  relevancia: string,
  trailer: string,
  genero: {
    id: number,
    nome: string
  }
}
