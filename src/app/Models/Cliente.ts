import { ClienteLogin } from './ClienteLogin';
import { Familiares } from './Familiares';
import { Contato } from './Contato';
import { Endereco } from './Endereco';
import { Agencia } from './Agencia';
import { Conta } from './Conta';
import { Banco } from './Banco';

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
    Contatos:Array<Contato>;
    Endereco:Array<Endereco>;

    Conta : Array<Conta>;
    Agencia : Array<Agencia>;
    Banco : Array<Banco>;
}