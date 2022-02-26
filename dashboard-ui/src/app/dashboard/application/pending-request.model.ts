import { PendingRequestDetails } from "./pending-request-details.model";
import { RequestStatus } from "./request-status.enum";

export class PendingRequest {
    appName: string;
    apiName: string;
    state: RequestStatus;
    pendingRequestDetailsList: PendingRequestDetails[] = []; 
}