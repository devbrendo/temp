import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AcessoOlho {
    TOKEN = `3734d225a6c5714fc999a225c860d31727a6dcfb52c8447561c5de8a13921679`;
    API_OLHO = 'https://api.olhovivo.sptrans.com.br/v2.1'; 

    public endpoints = {
        tokenAcesso: () => `${this.API_OLHO}/Login/Autenticar?token=${this.TOKEN}`,
        busca: () => `${this.API_OLHO}/Linha/Buscar?termosBusca=8000`
    }

    constructor(private readonly http: HttpClient) {}

    async token(): Promise<boolean> {
        const endpoint = this.endpoints.tokenAcesso();
        try {
            const response: any = await this.http.post<boolean>(endpoint, {}).toPromise();
            return response;
        } catch (error) {
            console.error('Erro na requisição', error);
            return false;
        }
    }

    busca(): Observable<any> {
        const endpoint = this.endpoints.busca();
        return this.http.get(endpoint).pipe(
            catchError(error => {
                console.error('Erro na requisição', error);
                return of(null); // Retorna null ou um valor padrão em caso de erro
            })
        );
    }
}
