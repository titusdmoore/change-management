import { Role } from '../enums';

function GetDisplayRolesByUser( user: User ): string[] {
  let _out: string[] = [];

  if ( user.roles ) {
    user.roles.forEach(( role: Role ) => {
      _out.push(GetRoleDisplayByEnum(role));
    });
  }

  return _out;
};

function GetRoleDisplayByEnum( role: Role ) {
  return `${role}`;
} ;

export { GetDisplayRolesByUser, GetRoleDisplayByEnum };