export class ReimbursementStatus{
    reimbStatusID: number;
    reimbStatus: string;

    static from(obj: any): ReimbursementStatus {
        const reimbStatus = new ReimbursementStatus(obj.reimbStatusID, obj.reimbStatus);
        return reimbStatus;
    }

    constructor(reimbStatusID, reimbStatus){
        this.reimbStatusID = reimbStatusID;
        this.reimbStatus = reimbStatus;
    }
}

export interface ReimbursementStatusRows{
    reimb_status_id: number;
    reimb_status: string;
}