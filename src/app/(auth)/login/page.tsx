import LoginForm from '@/app/(auth)/login/components/login-form';

const Login = () => {
  return (
    <div className="h-[calc(100vh-256px)] w-full px-12 py-10">
      <h1 className="pt-10 text-center text-base font-bold">Login</h1>
      <div className="my-5 flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
