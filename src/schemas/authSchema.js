import joi from "joi";

export const authCadastroSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  tel: joi.string().required(),
  cpf: joi.string().max(11).required(),
    street: joi.string().required(),
    number: joi.string().required(),
    complement: joi.string().required(),
    cep: joi.string().max(8).required(),
  password: joi.string().required(),
  repeatPassword: joi.ref("password")
  
});
export const authLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
