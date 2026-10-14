interface IDetalhes{
    produtoID: string;
    quantidade:number;
    produtoNome: string;
    unidadeMedidaSigla: string;
}
export interface IOperacao{
    motivo: string;
    entradaSaida: string;
    detalhes: IDetalhes[];
}