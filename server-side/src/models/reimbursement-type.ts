export class ReimbursementType{
    reimbTypeID: number;
    reimbType: string;


    constructor(reimbTypeID, reimbType){
        this.reimbTypeID = reimbTypeID;
        this.reimbType = reimbType;
    }
}

export interface ReimbursementTypeRows{
    reimb_type_id: number;
    reimb_type: string;
}