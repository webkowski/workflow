import { forgotPasswordAction } from "@/app/actions";
import Button from "@/components/base/button";
import Link from "next/link";

export default async function ForgotPassword() {
  return (
    <>
      <form>
          <h1>Reset Password</h1>
          <p>
            Already have an account?{" "}
            <Link href="/sign-in">
              Sign in
            </Link>
          </p>
        
        <div >
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="you@example.com" required />
          <Button formAction={forgotPasswordAction} type="submit">
            Reset Password
          </Button>
          
        </div>
      </form>
    </>
  );
}