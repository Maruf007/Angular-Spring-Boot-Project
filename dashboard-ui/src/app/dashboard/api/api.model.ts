import { Feature } from "../property/feature.model";
import { Property } from "../property/property.model";

export class Api {
    id: number;
    name: string;
    clientName: string;
    status: number;
    onOff: boolean;
    propertyList: Property[] = [];
    featureList: Feature[] = [];
}