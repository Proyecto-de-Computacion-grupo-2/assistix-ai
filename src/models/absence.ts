export class Absence {
    id_absence: number;
    id_mundo_deportivo: number;
    type_absence: string;
    description_absence: string;
    since: string;
    until: string;

    constructor(
        id_absence: number = 0,
        id_mundo_deportivo: number = 0,
        type_absence: string = "",
        description_absence: string = "",
        since: string = "",
        until: string = ""
    ) {
        this.id_absence = id_absence;
        this.id_mundo_deportivo = id_mundo_deportivo;
        this.type_absence = type_absence;
        this.description_absence = description_absence;
        this.since = since;
        this.until = until;
    }
}