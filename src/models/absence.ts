export class Absence {
    idAbsence: number;
    idMundoDeportivo: number;
    typeAbsence: string;
    descriptionAbsence: string;
    since: string;
    until: string;

    constructor(
        idAbsence: number = 0,
        idMundoDeportivo: number = 0,
        typeAbsence: string = "",
        descriptionAbsence: string = "",
        since: string = "",
        until: string = ""
    ) {
        this.idAbsence = idAbsence;
        this.idMundoDeportivo = idMundoDeportivo;
        this.typeAbsence = typeAbsence;
        this.descriptionAbsence = descriptionAbsence;
        this.since = since;
        this.until = until;
    }
}
