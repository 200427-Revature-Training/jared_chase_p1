import { Reimbursement } from '../models/reimbursement';
import { UpdatedReimbursement } from '../models/updated-reimbursement';
import * as reimbDao from '../daos/reimbursement-dao';

export function getAllReimb(): Promise<Reimbursement[]> {
    return reimbDao.getAllReimb();
}

export function getAllReimbByUsername(username: string): Promise<Reimbursement[]> {
    return reimbDao.getAllReimbByUsername(username);
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

export function updateReimb(input: any): Promise<UpdatedReimbursement> {
    const reimResolved = input.reimbResolved && new Date(input.reimbResolved);

    const updatedReimb = new UpdatedReimbursement(
        input.reimbID, reimResolved, input.reimbResolver, input.reimbStatusID
    );

    if(!updatedReimb.reimbID) {
        throw new Error('400');
    }

    return reimbDao.updateReimb(updatedReimb);
}