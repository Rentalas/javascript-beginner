import { User5 } from "./array1.abstraction";

export class UserAccount implements User5 {
    constructor(
        public  name: string, 
        public id: number
    ) { }

    changeName(str: string): void {
        this.name = str;
    }
}