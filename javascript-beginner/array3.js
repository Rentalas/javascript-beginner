const filterRange = (arr, a, b) => {
    return arr.filter(el => (a < el && el < b));  
 };
 
 const arr = [5,3,8,1,20,99,22,13,24,5,2,1,35,45];
 const filtered = filterRange (arr, 1, 45);
 console.log(filtered);
 
 
 const filterRangeInPlace = (arr, a, b) => {
     const filteredArray = filterRange(arr, a, b);
     arr.length = 0;
     filteredArray.forEach(el => arr.push(el));
    };
    //  filterRangeInPlace(arr, 1, 22);
    
    //  console.log('initial array', arr);
    
    const filterRangeInPlace2 = (arr, a, b,) => {
        const copiedArr = arr.slice();
        arr.length = 0;
        copiedArr.forEach(el => {
            if (a < el && el < b) arr.push(el);
        });
    };
    const arr1 = [5,3,8,1,20,99,22,13,24,5,2,1,35,45];
    filterRangeInPlace2(arr1, 1, 22);
    
    console.log('initial array', arr1);