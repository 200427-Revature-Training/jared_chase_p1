export class User {
    ersUsersID: number;
    ersUsername: string;
    ersPassword: string;
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userRoleID: number;

    static from(obj: UserRow): User {
        const user  = new User(
            //obj.ersUsersID, obj.ersUsername, obj.ersPassword, obj.userFirstName, obj.userLastName, 
            //obj.userEmail, obj.userRoleID
            obj.ers_users_id, obj.ers_username, obj.ers_password, obj.user_first_name, obj.user_last_name,
            obj.user_email, obj.user_role_id
        );
        return user;
    }

    constructor(ersUsersID, ersUsername, ersPassword, userFirstName, userLastName, userEmail, userRoleID){
        this.ersUsersID = ersUsersID;
        this.ersUsername = ersUsername;
        this.ersPassword = ersPassword;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userEmail = userEmail;
        this.userRoleID = userRoleID;
    }
}

export interface UserRow{
    ers_users_id: number;
    ers_username: string;
    ers_password: string;
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_role_id: number;
}