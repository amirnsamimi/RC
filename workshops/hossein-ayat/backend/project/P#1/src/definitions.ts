enum EPositions {
  user = "user",
  manager = "manager",
  owner = "owner",
}

enum EStatusCodes {
  "Success" = 200,
  "Not Found" = 404,
  "Not Authorized" = 401,
}

interface IUsersBase {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  positionId: string; //typeof position ids or string is ok ?
}

export { IUsersBase, EPositions, EStatusCodes };
