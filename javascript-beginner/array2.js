const filterRange = (arr, a, b) => {
   return arr.filter(el => (a < el && el < b));  
};

const arr = [5,3,8,1,20,99,22,13,24,5,2,1,35,45];
const filtered = filterRange (arr, 1, 45);
console.log(filtered);