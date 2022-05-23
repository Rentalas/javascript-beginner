export const fill = (array, value, start, end) => {
  array.map((el, i) => {
     if (i >= start && i < end)
        el = value
        console.log(el)
        console.log()
  })  
  return array
}