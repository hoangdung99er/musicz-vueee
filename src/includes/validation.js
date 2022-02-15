import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

function upperCaseErrors(value) {
  return value.slice(0, 1).toUpperCase() + value.slice(1);
}

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `${upperCaseErrors(ctx.field)} is required.`,
          min: `${upperCaseErrors(ctx.field)} is too short.`,
          max: `${upperCaseErrors(ctx.field)} is too long.`,
          alpha_spaces: `${upperCaseErrors(ctx.field)} only contain alphab`,
          email: `${upperCaseErrors(ctx.field)} must be a valid email.`,
          min_value: `${upperCaseErrors(ctx.field)} is too low.`,
          max_value: `${upperCaseErrors(ctx.field)} is too high.`,
          excluded: `You are not allowed ${upperCaseErrors(ctx.field)}.`,
          country_excluded:
            "Due to restrictions, we do not accept users from this location.",
          passwords_mismatch: "The passwords don't match.",
          tos: "You must accept the Terms of Service.",
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `${upperCaseErrors(ctx.field)} is invalid.`;

        return message;
      },
    });
  },
};
