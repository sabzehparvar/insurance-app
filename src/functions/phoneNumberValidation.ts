const isPhoneNumberValid = (phoneNumber: string) => {
  const persianPhoneRegex = /^9\d{9}$|^09\d{9}$/;
  return persianPhoneRegex.test(phoneNumber);
};

export default isPhoneNumberValid;
