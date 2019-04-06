import { Imagem } from "./imagem.model";

export class Oferta {

    constructor() { }

    public id: number;
    public categoria: string;
    public titulo: string;
    public descricao_oferta: string;
    public anunciante: string;
    public valor: number;
    public destaque: boolean;
    public imagens: Imagem[];
}