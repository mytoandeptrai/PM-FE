'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { TextField } from '@/components/shared/forms';
import { SelectField } from '@/components/shared/forms/select-field';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';

import { RegisterBody, RegisterBodyType } from '@/app/(auth)/register/config';

const defaultOptions = [
  {
    label: 'Please select your gender',
    value: 'empty',
  },
  {
    label: 'Male',
    value: '0',
  },
  {
    label: 'Female',
    value: '1',
  },
  {
    label: 'Other',
    value: '2',
  },
];

const RegisterForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const formHandler = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      fullname: '',
      age: '',
      username: '',
      password: '',
      address: '',
      gender: 'empty',
      password_confirm: '',
      phone: '',
      email: '',
    },
  });

  const { control } = formHandler;

  const onSubmit = async (values: RegisterBodyType) => {
    console.log('🚀 ~ onSubmit ~ values:', values);
  };

  return (
    <FormWrapper form={formHandler} onSubmit={onSubmit}>
      <div className="flex flex-col gap-y-5">
        <TextField
          control={control}
          name="fullname"
          placeholder="Enter your fullname..."
          size="default"
          className="min-w-80 rounded-sm"
          label="Full Name"
          required
        />
        <TextField
          control={control}
          name="age"
          placeholder="Enter your age..."
          size="default"
          className="min-w-80 rounded-sm"
          label="Age"
          type="number"
          required
        />
        <TextField
          control={control}
          name="phone"
          placeholder="Enter your phone number..."
          size="default"
          className="min-w-80 rounded-sm"
          label="Phone Number"
          required
        />
        <SelectField
          className="min-w-80 rounded-sm"
          control={control}
          name="gender"
          data={defaultOptions}
          label="Gender"
          required
        />
        <TextField
          control={control}
          name="address"
          placeholder="Enter your address..."
          size="default"
          className="min-w-80 rounded-sm"
          label="Address"
          required
        />
        <TextField
          control={control}
          name="email"
          placeholder="Enter your email..."
          size="default"
          className="min-w-80 rounded-sm"
          label="Email"
          required
        />
        <TextField
          control={control}
          name="username"
          placeholder="Enter your user name..."
          size="default"
          className="min-w-80 rounded-sm"
          label="User Name"
          required
        />
        <TextField
          control={control}
          name="password"
          placeholder="Enter your password..."
          size="default"
          type="password"
          className="min-w-80 rounded-sm"
        />
        <TextField
          control={control}
          name="password_confirm"
          placeholder="Enter your confirm password..."
          size="default"
          type="password"
          className="min-w-80 rounded-sm"
        />
        <div className="flex flex-col gap-y-3">
          <Link href="login" className="text-xs text-blue-400 hover:underline">
            {'Already have an account? Login here'}
          </Link>
          <Button className="w-full" type="submit">
            Register
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
};

export default RegisterForm;
