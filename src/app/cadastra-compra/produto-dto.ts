export interface ProdutoDto {
    nome: string;
    preco: number;
    temOferta: number;
    nomePesquisa:string;
    mercado: string;
    dataCompra:string;
    cpf: string;
    flagTemOferta: boolean;
    precoTotal: number
}

export type ProdutosDtos = Array<ProdutoDto>;
