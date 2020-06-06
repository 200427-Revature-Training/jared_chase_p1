export class Users {
    ersUsersID: number;
    ersUsername: string;
    ersPassword: string;
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userRoleID: number;

    static from(obj: any): Users {
        const user  = new Users(
            obj.ersUsersID, obj.ersUsername, obj.ersPassword, obj.userFirstName, obj.userLastName, 
            obj.userEmail, obj.userRoleID
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

export interface UsersRows{
    ers_users_id: number;
    ers_username: string;
    ers_password: string;
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_role_id: number;
}