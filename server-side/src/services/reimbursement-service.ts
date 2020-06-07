import { Reimbursement } from '../models/reimbursement';
import * as reimbDao from '../daos/reimbursement-dao';

export function getAllReimb(): Promise<Reimbursement[]> {
    return reimbDao.getAllReimb();
}

export function getAllReimbByUser(user: string): Promise<Reimbursement[]> {
    return reimbDao.getAllReimbByUser(user);
}

export function getAllReimbByStatus(status: string): Promise<Reimbursement[]> {
    return reimbDao.getAllReimbByStatus(status);
}

export function saveReimb(reimb: any): Promise<Reimbursement> {
    const newReimb = new Reimbursement(
        undefined, reimb.reimbAmount, new Date(reimb.reimbSubmitted), 
        undefined, reimb.reimbDescription, reimb.reimbReceipt, 
        reimb.reimbAuthor, undefined, reimb.reimbStatusID, reimb.reimbTypeID
    );

    if(reimb.reimbAmount && reimb.reimbSubmitted && reimb.reimbDescription && reimb.reimbReceipt && 
        reimb.reimbAuthor && reimb.reimbStatusID && reimb.reimbTypeID){
            return reimbDao.saveReimb(newReimb);
        }else {
            return new Promise((resolve, reject) => reject(422));
        }
}

export function updateReimb(input: any): Promise<Reimbursement> {
    const resolved = input.reimbResolved && new Date(input.reimbResolved);
    const submitted = input.reimbSubmitted && new Date(input.reimbSubmitted);

    const updatedReimb = new Reimbursement(
        input.reimbID, input.reimbAmount, submitted, 
        resolved, input.reimbDescription, input.reimbReceipt, 
        input.reimbAuthor, input.reimbResolver, input.reimbStatusID, input.reimbTypeID
    );

    if(!updatedReimb.reimbID) {
        throw new Error('400');
    }

    return reimbDao.updateReimb(updatedReimb);
}