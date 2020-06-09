import { User } from '../models/user';
import * as userDao from '../daos/user-dao';

export function getAllUsers(): Promise<User[]> {
    return userDao.getAllUsers();
}

export function getUserByUsername(username: string): Promise<User> {
    return userDao.getUserByUsername(username);
}

export function saveUser(user: User): Promise<User> {
    const newUser: User = new User(
        undefined, user.ersUsername, user.ersPassword, user.userFirstName, 
        user.userLastName, user.userEmail, user.userRoleID
    );

    if(user.ersUsername && user.ersPassword && user.userFirstName 
        && user.userLastName && user.userEmail && user.userRoleID) {
            return userDao.saveUser(newUser);
        }else {
            return new Promise((resolve, reject) => reject(422));
        }
}