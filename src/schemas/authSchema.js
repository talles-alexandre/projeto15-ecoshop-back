import joi from "joi";

export const authCadastroSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  tel: joi.string().required(),
  cpf: joi.string().max(11).required(),
  // adress: joi.object({
  //   street: joi.string().required(),
  //   number: joi.number().required(),
  //   complement: joi.string().required(),
  //   cep: joi.number().max(8).required(),
  // }).required(),
  password: joi.string().required(),
  repeatPassword: joi.ref("password")
  
});
export const authLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
