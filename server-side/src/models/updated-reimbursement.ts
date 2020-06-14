export class UpdatedReimbursement{
    reimbID: number;
    reimbResolved: Date;
    reimbResolver: number;
    reimbStatusID: number;
    

    static from(obj: UpdatedReimbursementRow): UpdatedReimbursement {
        const reimb = new UpdatedReimbursement(
            //obj.reimbID, obj.reimbAmount, obj.reimbSubmitted, obj.reimbResolved, obj.reimbDescription,
            //obj.reimbReceipt, obj.reimbAuthor, obj.reimbResolver, obj.reimbStatusID, obj.reimbTypeID
            obj.reimb_id, obj.reimb_resolved, obj.reimb_resolver, obj.reimb_status_id
        );

        return reimb;
    }

    constructor(reimbID: number, reimbResolved, reimbResolver, reimbStatusID) {
        this.reimbID = reimbID;
        this.reimbResolved = reimbResolved;
        this.reimbResolver = reimbResolver;
        this.reimbStatusID = reimbStatusID;
    }
}

export interface UpdatedReimbursementRow {
    reimb_id: number;
	reimb_resolved: Date;
	reimb_resolver: number;
	reimb_status_id: number;
}