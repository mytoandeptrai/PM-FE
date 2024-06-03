import { z } from 'zod';

export const RegisterBody = z
  .object({
    fullname: z.string().min(6).max(20),
    age: z.string(),
    username: z.string().min(6).max(20),
    password: z.string().min(6).max(100),
    gender: z.string(),
    address: z.string(),
    email: z.string().email(),
    phone: z.string().min(10).max(10),
    password_confirm: z.string().min(6).max(100),
  })
  .strict()
  .superRefine(({ password_confirm, password, age }, ctx) => {
    if (password_confirm !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Password confirm is not the same with password!',
        path: ['password_confirm'],
      });
    }

    const convertVal = parseInt(age);
    if (convertVal < 18 || convertVal > 100) {
      ctx.addIssue({
        code: 'custom',
        message: 'Age must be between 18 and 100',
        path: ['age'],
      });
    }
  });

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>;
