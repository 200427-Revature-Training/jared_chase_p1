export interface Reimbursement{
    reimbID?: number;
    reimbAmount: number;
    reimbSubmitted: Date | string;
    reimbResolved: Date | string;
    reimbDescription: string;
    reimbReceipt: string;
    reimbAuthor: number;
    reimbResolver?: number;
    reimbStatusID: number;
    reimbTypeID: number | string;
}