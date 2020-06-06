export class Reimbursement{
    reimbID: number;
    reimbAmount: number;
    reimbSubmitted: Date;
    reimbResolved: Date;
    reimbDescription: string;
    reimbReceipt: string;
    reimbAuthor: number;
    reimbResolver: number;
    reimbStatusID: number;
    reimbTypeID: number;

    static from(obj: any): Reimbursement {
        const reimb = new Reimbursement(
            obj.reimbID, obj.reimbAmount, obj.reimbSubmitted, obj.reimbResolved, obj.reimbDescription,
            obj.reimbReceipt, obj.reimbAuthor, obj.reimbResolver, obj.reimbStatusID, obj.reimbTypeID
        );

        return reimb;
    }

    constructor(reimbID, reimbAmount, reimbSubmitted, reimbResolved, reimbDescription,
                reimbReceipt, reimbAuthor, reimbResolver, reimbStatusID, reimbTypeID) {
        this.reimbID = reimbID;
        this.reimbAmount = reimbAmount;
        this.reimbSubmitted = reimbSubmitted;
        this.reimbResolved = reimbResolved;
        this.reimbDescription = reimbDescription;
        this.reimbReceipt = reimbReceipt;
        this.reimbAuthor = reimbAuthor;
        this.reimbResolver = reimbResolver;
        this.reimbStatusID = reimbStatusID;
        this.reimbTypeID = reimbTypeID;
    }
}

export interface ReimbursementRow {
    reimb_id: number;
	reimb_amount: number;
	reimb_submitted: Date;
	reimb_resolved: Date;
	reimb_description: string;
	reimb_receipt: string;
	reimb_author: number;
	reimb_resolver: number;
	reimb_status_id: number;
	reimb_type_id: number;
}