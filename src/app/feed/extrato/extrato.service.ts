import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';


const api = this.URL + " api/Cliente";

export class ExtratoService {

    constructor(private http: HttpClient, @Inject('URL') private Url: string) { }

    GetInfoCliente(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.Url);
    }
}