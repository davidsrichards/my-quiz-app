export const userValidator = {
  firstname: {
    notEmpty: {
      errorMessage: "please provide firstname",
    },
  },
  lastname: {
    notEmpty: {
      errorMessage: "please provide lastname",
    },
  },
  email: {
    notEmpty: {
      errorMessage: "please provide email",
    },
    isEmail: {
      errorMessage: "Invalid Email Address",
    },
  },
  phone: {
    notEmpty: {
      errorMessage: "please provide phone number",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "please provide password",
    },
  },
};
