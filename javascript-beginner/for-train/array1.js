const camelize = (str) => {
    const strSplit = str.split('-');
  
    const capitalizedStr = strSplit.map((str, index) => { 
        if (index === 0) {
        return str      
}
        return str[0].toUpperCase() + str.slice(1)
})
        return capitalizedStr.join('');
};

// // console.log(strSliced('background-color'))
console.log(camelize('background-color'));


