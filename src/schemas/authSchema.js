import joi from "joi";

export const authCadastroSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
export const authLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
