export interface ProdutoDto {
    nome: string;
    preco: number;
    temOferta: number;
    nomePesquisa:string;
    mercado: string;
    dataCompra:string;
    cpf: string;
    flagTemOferta: boolean;
}

export type ProdutosDtos = Array<ProdutoDto>;
