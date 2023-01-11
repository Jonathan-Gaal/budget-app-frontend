let dateConvert = (date) => {
  let reverseDate = date.slice(5, 8);
  reverseDate += date.slice(-2);
  reverseDate += "-";
  reverseDate += date.slice(0, 4);
  return reverseDate;
};

export { dateConvert };
