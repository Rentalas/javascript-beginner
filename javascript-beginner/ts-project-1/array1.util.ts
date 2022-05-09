import { InputType, Union, User } from "./array1.abstraction";

export const createSequencialNumbers = (start, end) => {
    const length = end - start + 1;
    const arr = Array.from<number>({ length }).fill(1);
    let current = start;
    return arr.map(el => {
        const updatedEl = el * current;
        current++;
        return updatedEl;
    })
}

   
export  function deleteUser(user: User) {
    // ...
  }


  export const useUnion: (x: Union) => void = (union) => {
    (union as User);
}



const createInput = () => {
    const input = {
        type: InputType.Text
    }
}