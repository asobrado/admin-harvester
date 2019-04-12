import {Repository} from "./repository";

export class HarvestDefinition {
    id: string;
    nombre: string;
    descripcion: string;
    cronExpresion:string;
    nextExecutionDateTime: Date;
    harvestfrom: Date;
    harvestUntil: Date;
    contactEmail: string;
    repository: Repository;
    harvests: Headers[];
}
