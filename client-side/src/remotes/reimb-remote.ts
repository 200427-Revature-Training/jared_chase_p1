import { internalAxios } from "./internal-axios"
import { Reimbursement } from '../models/reimbursement';

export const getAllReimbs = async () => {
    const response = await internalAxios.get<Reimbursement[]>('/reimbursement');
    console.log(response);
    return response.data.map(reimb => {
        reimb.reimbSubmitted = new Date(reimb.reimbSubmitted);
        reimb.reimbResolved = new Date(reimb.reimbResolved);
        return reimb;
    });
}


export const saveReimb = async (reimb: Reimbursement) => {
    const response = await internalAxios.post('/reimbursement', reimb);
    return true;
}