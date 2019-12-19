export interface Transacao {
    idTipoTransacao: number;
    numeroConta: number;
    numeroContaDestino: number;
    numeroContaOrigem: number;
    valor: number;
    dtTransacao: string;
    senhaTransacoes: string;
}