
export interface Cliente{
    CPF: string;
    RG: string;
    ORGAOEMISSOR: string;
    DTNASCIMENTO: Date;
    NOME: string;
    SOBRENOME: string;
    NACIONALIDADE: string;
    NATURALIDADE: string;

    ClienteLogin:Array<ClienteLogin>;
    Familiares:Array<Familiares>;
    Contatos:Array<Contato>;
    Endereco:Array<Endereco>;
}

export interface Familiares {
    nome_Mae: string;
    sobrenome_Mae: string;
    nome_Pai: string;
    sobrenome_Pai: string;
}

export interface Contato {
    email: string;
    tel_resid: string;
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
    CPF: string;
    senha: string;
}