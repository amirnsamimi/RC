import { EStatusCodes, IUsersBase } from "./definitions";

function myUsersDB() {
  const users: IUsersBase[] = [];
  return {
    addUser(user: IUsersBase) {
      users.push(user);
    },
    getUsers() {
      return [...users];
    },
    findUserByPhone(phone: string) {
      return users.find((u) => u.phoneNumber === phone);
    },
    deleteUserByPhone(phone: string) {
      const index = users.findIndex((u) => u.phoneNumber === phone);
      if (index !== -1) users.splice(index, 1);
    },
    clearUsers() {
      users.length = 0;
    },
  };
}

class Users implements IUsersBase {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public positionId: string
  ) {
    this.id = crypto.randomUUID();
  }
}

export { Users, myUsersDB };
