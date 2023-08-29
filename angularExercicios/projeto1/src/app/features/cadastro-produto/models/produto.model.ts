export interface produto{
  id: number,
  nome: string,
  descricao: string,
  imagemUrl?: string,
  preco: string,
  estoque: number
}


export interface produtos extends Array<produto>{};
