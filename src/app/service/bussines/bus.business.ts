import { Injectable } from "@angular/core";
import { AcessoOlho } from "../api/acesso.api";

@Injectable({ providedIn: 'root' })
export class busBusiness {
    constructor(
        private readonly busApi: AcessoOlho
    ){
    }

    async ObterToken(){
        return await this.busApi.token();
    }

    async busca():Promise<any>{
        return await this.busApi.busca();
    }
}