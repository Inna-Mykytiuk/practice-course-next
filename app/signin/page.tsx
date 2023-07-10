import { GoogleButton } from '@/components/GoogleButton';
import { SignInForm } from '@/components/SignInForm';

export default async function Signin() {
  return (
    <div className="stack">
      <h1>Sign In</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
}
