import RegisterForm from '@/app/(auth)/register/components/register-form';

const Register = () => {
  return (
    <div className="h-fit w-full px-12 py-10">
      <h1 className="pt-10 text-center text-base font-bold">Register</h1>
      <div className="my-5 flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
