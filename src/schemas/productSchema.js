import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required(),
    image: joi.string().required(),
    category: joi.string().required(),
    productStock: joi.number().required(),
});