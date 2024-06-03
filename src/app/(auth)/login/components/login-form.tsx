'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { TextField } from '@/components/shared/forms';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';

import { LoginBody, LoginBodyType } from '@/app/(auth)/login/config';

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const formHandler = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { control } = formHandler;

  const onSubmit = async (values: LoginBodyType) => {
    console.log('🚀 ~ onSubmit ~ values:', values);
  };

  return (
    <FormWrapper form={formHandler} onSubmit={onSubmit}>
      <div className="flex flex-col gap-y-5">
        <TextField
          control={control}
          name="username"
          placeholder="Enter your username..."
          size="default"
          className="min-w-80 rounded-sm"
        />
        <TextField
          control={control}
          name="password"
          placeholder="Enter your password..."
          size="default"
          type="password"
          className="min-w-80 rounded-sm"
        />
        <div className="flex flex-col gap-y-3">
          <Link href="register" className="text-xs text-blue-400 hover:underline">
            {"Don't have account? Register here"}
          </Link>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
};

export default LoginForm;
