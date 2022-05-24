export const fill = (array, value, start, end) => {
  return array.map((el, i) => i >= start && i < end
    ? value
    : el
  );
}