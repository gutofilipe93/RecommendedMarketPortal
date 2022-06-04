import { RecomendacaoMercadoItens } from "./recomendacao-mercado-item";

export interface RecomendacaoMercado {
    market: string;
    message: string;
    items: RecomendacaoMercadoItens;
}
