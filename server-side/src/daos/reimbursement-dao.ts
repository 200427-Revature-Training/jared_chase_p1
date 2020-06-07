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

export async function getAllReimbByUser(user: string): Promise<Reimbursement[]> {
    const employeeExists: boolean = await userExists(user);
    if(!employeeExists){
        return undefined;
    }

    const sql = `select ers_reimbursement.* from ers_reimbursement inner \
    join ers_users on ers_reimbursement.reimb_author = ers_users.ers_users_id \
    where user_first_name = $1`;

    const result = await db.query<ReimbursementRow>(sql, [user]);

    const rows = result.rows;
    console.log(rows);

    const reimbursements: Reimbursement[] = rows.map(row => Reimbursement.from(row));
    return reimbursements;
}

//function to check if user exists and if name spelled correctly
export async function userExists(firstName: string): Promise<boolean> {
    const sql = 'select exists(select user_first_name from ers_users where user_first_name = $1;';
    const result = await db.query<Exists>(sql, [firstName]);
    return result.rows[0].exists;
}

export async function getAllReimbByStatus(status: string): Promise<Reimbursement[]> {
    const sql = `select ers_reimbursement.* from ers_reimbursement inner \
    join ers_reimbursement_status on ers_reimbursement.reimb_status_id = \
    ers_reimbursement_status.reimb_status_id where reimb_status = $1`;

    const result = await db.query<ReimbursementRow>(sql, [status]);

    const rows = result.rows;

    const reimbursements: Reimbursement[] = rows.map(row => Reimbursement.from(row));
    return reimbursements;
}

export async function saveReimb(reimb: Reimbursement): Promise<Reimbursement> {
    const sql = `insert into ers_reimbursement (reimb_amount, reimb_submitted, reimb_resolved, reimb_description, reimb_receipt, \
        reimb_author, reimb_resolver, reimb_status_id, reimb_type_id) values 
        ($1, $2, null, $3, $4, $5, null, $6, $7) returning *`;

    const result = await db.query<ReimbursementRow>(sql, [
        reimb.reimbAmount,
        reimb.reimbSubmitted.toLocaleString(),
        reimb.reimbDescription,
        reimb.reimbReceipt,
        reimb.reimbAuthor,
        reimb.reimbStatusID,
        reimb.reimbTypeID
    ]);

    const rows = result.rows.map(row => Reimbursement.from(row))[0];
    return rows;
}

export async function updateReimb(reimb: Reimbursement): Promise<Reimbursement> {
    const sql = `update ers_reimbursement set reimb_resolved = coalesce($1, reimb_resolved), \
    set reimb_resolver = coalesce($2, reimb_resolver), set reimb_status_id = coalesce($3, reimb_status_id) \
    where user_first_name = $4`;

    const resolved = reimb.reimbResolved && reimb.reimbResolved.toLocaleString();

    const params = [resolved, reimb.reimbResolver, reimb.reimbStatusID];

    const result = await db.query<ReimbursementRow>(sql, params);

    const rows = result.rows.map(row => Reimbursement.from(row))[0];
    return rows;
}

interface Exists {
    exists: boolean;
}