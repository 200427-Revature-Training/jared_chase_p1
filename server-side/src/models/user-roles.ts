export class UserRoles{
    ersUserRoleID: number;
    userRole: string;

    constructor(ersUserRoleID, userRole){
        this.ersUserRoleID = ersUserRoleID;
        this.userRole = userRole;
    }
}

export interface UserRoleRows{
    ers_user_role_id: number;
    user_role: string;
}