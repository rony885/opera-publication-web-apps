const convertBanglaPercentage = (text) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  return String(text).replace(/[0-9]/g, (d) => banglaDigits[d]);
};

export default convertBanglaPercentage;
