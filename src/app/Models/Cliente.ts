export interface Cliente{
    cpf: string;
    rg: string;
    orgaoEmissor: string;
    dtNascimento: Date;
    nome: string;
    sobrenome: string;
    nacionalidade: string;
    naturalidade: string;

    ClienteLogin:Array<ClienteLogin>;
    Familiares:Array<Familiares>;
    Contato:Array<Contato>;
    Endereco:Array<Endereco>;
    Conta : Array<Conta>;
    Agencia : Array<Agencia>;
    Banco : Array<Banco>;
}

export interface Familiares {
    nomeMae: string;
    sobrenomeMae: string;
    nomePai: string;
    sobrenomePai: string;
}

export interface Contato {
    email: string;
    telresid: string;
    tel_cel: string;
}

export interface Endereco {
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    sigla_estado: string;
    cep: string;
}

export interface ClienteLogin {
    cpf: string;
    senha: string;
}

export interface Agencia {
    senhaTransacao: string;
}

export interface Conta {
    numConta: string;
}

export interface Banco {
    numAgencia: string;
    noemfanta : string;
    cnpj: string;
    ispb : string;
}
export interface Transferencia {
    numAgencia: string;
    noemfanta : string;
    cnpj: string;
    ispb : string;
}