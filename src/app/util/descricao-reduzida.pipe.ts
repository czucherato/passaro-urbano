import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'descricaoreduzida'
})
export class DescricaoReduzida implements PipeTransform {

    transform(texto: string, iniciarEm: number, truncarEm: number) {
        return texto.length > truncarEm ? `${ texto.substr(iniciarEm, truncarEm) }...` : texto;
    }

}