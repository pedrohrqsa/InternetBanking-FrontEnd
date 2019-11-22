import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContaCorrente } from 'src/app/Models/ContaCorrente';

const api = this.URL + "api/Feed";

export class FeedService {
    constructor(private http: HttpClient, @Inject('URL') private Url: string) { }

    GetFeed(): Observable<ContaCorrente[]> {
        return this.http.get<ContaCorrente[]>(this.Url);
    }
}