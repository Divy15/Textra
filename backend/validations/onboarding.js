const { Joi } = require("celebrate");

module.exports = {
  onboardingStoreBusinessOwnerDetails: {
    body: Joi.object({
      registrationType: Joi.string().trim().required().messages({
        "string.empty": "Registration type is required.",
        "any.required": "Registration type is a mandatory field.",
      }),

      owners: Joi.array()
        .items(
          Joi.object({
            firstname: Joi.string().trim().min(1).max(50).required().messages({
              "string.empty": "First name cannot be empty.",
            }),

            middlename: Joi.string()
              .trim()
              .max(50)
              .allow(null, "") // Safely allows empty string or null values
              .default(null),

            lastname: Joi.string().trim().min(1).max(50).required(),

            email: Joi.string()
              .trim()
              .email() // Validates standard email formats (e.g., name@domain.com)
              .required()
              .messages({
                "string.email": "Please provide a valid email address.",
              }),

            mobileno: Joi.string()
              .trim()
              .pattern(/^[0-9]{10}$/) // Strictly enforces a 10-digit phone number
              .required()
              .messages({
                "string.pattern.base":
                  "Mobile number must be a valid 10-digit number.",
              }),
          }),
        )
        .min(1) // Ensures the array contains at least one owner object
        .required()
        .messages({
          "array.min": "At least one business owner details must be provided.",
        }),
    }),
  },
};
