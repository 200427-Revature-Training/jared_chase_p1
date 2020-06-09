import { db } from './db';
import {User, UserRow } from '../models/user';

export async function getAllUsers(): Promise<User[]> {
    const sql = 'select * from project1.ers_users;'

    const result = await db.query<UserRow>(sql, []);
    return result.rows.map(row => User.from(row));
}

export async function getUserByUsername(username: string): Promise<User> {
    const employeeExists: boolean = await userExists(username);
    if(!employeeExists){
        return undefined;
    }

    const sql = 'select * from project1.ers_users where ers_username = $1';

    const result = await db.query<UserRow>(sql, [username]);
    return result.rows.map(row => User.from(row))[0];
}

//function to check if user exists and if username correctly entered
export async function userExists(username: string): Promise<boolean> {
    const sql = 'select exists(select ers_username from project1.ers_users where ers_username = $1)';
    const result = await db.query<Exists>(sql, [username]);
    return result.rows[0].exists;
}

export async function saveUser(user: User): Promise<User> {
    const sql = `insert into project1.ers_users (ers_username, ers_password, 
        user_first_name, user_last_name, user_email, user_role_id) values 
        ($1, $2, $3, $4, $5, $6) returning *`;

    const result = await db.query<UserRow>(sql, [
        user.ersUsername, user.ersPassword, user.userFirstName, user.userLastName,
        user.userEmail, user.userRoleID
    ]);

    const rows = result.rows;

    const users = rows.map(row => User.from(row))[0];
    return users;
}

interface Exists {
    exists: boolean;
}