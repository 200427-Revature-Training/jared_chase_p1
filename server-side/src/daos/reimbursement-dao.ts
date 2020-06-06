import { db } from './db';
import { Reimbursement, ReimbursementRow} from '../models/reimbursement';

export async function getAllReimb(): Promise<Reimbursement[]> {
    const sql = 'select * from ers_reimbursement order by reimb_submitted desc';

    const result = await db.query<ReimbursementRow>(sql, []);

    const rows: ReimbursementRow[] = result.rows;

    console.log(rows);

    const reimbursements: Reimbursement[] = rows.map(row => Reimbursement.from(row));
    return reimbursements;
}

export async function getReimbByUser(user: string): Promise<Reimbursement> {
    const employeeExists: boolean = await userExists(user);
    if(!employeeExists){
        return undefined;
    }

    const sql = `select ers_reimbursement.* from ers_reimbursement inner \
    join ers_users on ers_reimbursement.reimb_author = ers_users.ers_users_id \
    where user_first_name = $1`;

    //Dont understand the last line here, need to ask for help
    const result = await db.query<Reimbursement>(sql, [user]);
    return result.rows.map(row => Reimbursement.from(row))[0];
}

//function to check if user exists and if name spelled correctly
export async function userExists(firstName: string): Promise<boolean> {
    const sql = 'select exists(select user_first_name from ers_users where user_first_name = $1;';
    const result = await db.query<Exists>(sql, [firstName]);
    return result.rows[0].exists;
}

export async function getReimbByStatus(status: string): Promise<Reimbursement> {

}

export async function saveReimb(reimb: Reimbursement): Promise<Reimbursement> {

}

export async function updateReimb(reimb: Reimbursement): Promise<Reimbursement> {

}

interface Exists {
    exists: boolean;
}