import { string } from 'yup';

export const validationSchemaUtils = {
  password: string()
    .required()
    .test({
      name: 'min-length',
      test(password, ctx) {
        if (password.length < 8) {
          return ctx.createError({ message: 'mật khẩu phải có ít nhất 8 kí tự' });
        }
        return true;
      },
    }),
  rePassword: string()
    .required()
    .test({
      name: 'valid-repassowrd',
      test(password, ctx) {
        if (password.length < 8) {
          return ctx.createError({ message: 'mật khẩu phải có ít nhất 8 kí tự' });
        }
        if (password !== ctx.parent?.password) {
          return ctx.createError({ message: 'mật khẩu không khớp' });
        }
        return true;
      },
    }),
  email: string().email('vui lòng nhập chính xác email').required(),
};
