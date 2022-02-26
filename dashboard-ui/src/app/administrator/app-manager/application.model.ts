import { Api } from "src/app/dashboard/api/api.model";

export class Application {
    id: number;
    name: string;
    type: string;
    client: string;
    repoUrl: string;
    createDate: any;
    updateDate: Date;
    apiList: Api[] = [];
}