export const adminValidator = {
  firstname: {
    notEmpty: {
      errorMessage: "Please provide firstname",
    },
  },
  lastname: {
    notEmpty: {
      errorMessage: "Please provide lastname",
    },
  },
  email: {
    notEmpty: {
      errorMessage: "Please provide email",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Please provide password",
    },
  },
  phone: {
    notEmpty: {
      errorMessage: "Please provide phone number",
    },
  },
};
