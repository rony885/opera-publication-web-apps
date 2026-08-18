const convertToBanglaNumber = (number) => {
  return new Intl.NumberFormat("bn-BD").format(number);
};

export default convertToBanglaNumber;
