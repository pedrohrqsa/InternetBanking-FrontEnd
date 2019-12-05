import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conta } from 'src/app/Models/Conta';

const api = this.URL + "api/Feed";

export class FeedService {
    constructor(private http: HttpClient, @Inject('URL') private Url: string) { }

    GetFeed(): Observable<Conta[]> {
        return this.http.get<Conta[]>(this.Url);
    }
}