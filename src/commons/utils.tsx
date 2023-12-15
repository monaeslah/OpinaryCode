export const validateEmail = (email: string) => {
  let regExp = /\S+@\S+\.\S+/;
  return regExp.test(email);
};
