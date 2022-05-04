export interface ProdutoDto {
    nome: string;
    preco: number;
    temOferta: boolean;
    nomePesquisa:string;
    mercado: string;
    dataCompra:string;
    cpf: string;
}

export type ProdutosDtos = Array<ProdutoDto>;
