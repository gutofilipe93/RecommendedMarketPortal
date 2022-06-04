export interface RecomendacaoMercadoItem {
    name: string;
    price: number;
    haveOffer: boolean;
    dateLastPurchase: string;
    market: string;
    searchableName: string;
}

export type RecomendacaoMercadoItens = Array<RecomendacaoMercadoItem>;
