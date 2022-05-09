import { Union, User } from "./array1.abstraction";
import { ErrorCode } from "./array1.constant";
import { handleServerError } from "./error-handling";
import { UserAccount } from "./user-account";

export var user2: User = {
    name: 'masha',
    id: 1,
    // message: 'nah',
}

export const user = new UserAccount("Murphy", 1);

export const user1: Union = new UserAccount("Murphy", 1);

export function handlingResponse(res: any): void {
    if (res.code === ErrorCode[res.code]) {
        handleServerError();
    }
}

console.log(ErrorCode)
console.log(1);




