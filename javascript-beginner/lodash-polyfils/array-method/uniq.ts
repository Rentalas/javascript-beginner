// export const uniq = (arr: Array<unknown>): Array<unknown> => {
//     return arr.filter((value, index, array) => array.indexOf(value) === index)
// }

// export const uniq2 = (arr) => {
//     const arrayOfUniquesEl = [];
    
// }




export const uniq3 = (arr: Array<unknown>): Array<unknown> => {
    const uniqs = [];
    arr.forEach(el => {
          if(uniqs.includes(el)) 
          return;
          
          uniqs.push(el);
    })
    return uniqs;
 }