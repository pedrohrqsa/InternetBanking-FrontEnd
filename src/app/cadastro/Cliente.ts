import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective, NgForm, FormControl } from '@angular/forms';

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
    Agencia:Array<Agencia>;
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
    cpf: string;
    senha: string;
}

export interface Conta {
    numConta: string;
}

export interface Agencia {
    numAgencia: string;
}

