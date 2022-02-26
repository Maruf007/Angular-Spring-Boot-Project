import { Property } from "./property.model";

export class Feature {
    id: number;
    name: string;
    status: boolean;
    onOff: boolean;
    apiId: number;
    subFeatures: Feature[] = [];
    properties: Property[] = [];
}