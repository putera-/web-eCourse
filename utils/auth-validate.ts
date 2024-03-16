import Joi from 'joi';
import { isEmail, isPassword, isString } from '~/stores/main-validation';

const authValidation = Joi.object({
    email: isEmail.required(),
    password: isPassword.required()
});

const userValidation = {
    name: isString.required().label('Name'),
    email: isEmail.required().label('Email'),
    password: isPassword.required().label('Password'),
    password_confirm: isPassword.required()
        .valid(Joi.ref('password'))
        .label('Password Confirm')
        .options({
            messages: {
                'any.only': '{{#label}} is not match'
            }
        })
}

const createUserValidation = Joi.object({
    ...userValidation
});

const updateUserValidation = Joi.object({
    ...userValidation,
    old_password: isPassword.required().label('Old Password')
});

export {
    authValidation,
    createUserValidation,
    updateUserValidation
};
