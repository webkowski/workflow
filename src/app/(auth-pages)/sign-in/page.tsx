import { signInAction } from "@/app/actions";
import Button from "@/components/base/button";

import Link from "next/link";

export default async function Login() {
  return (
    <div>
      <h1>Sign in</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <Button  formAction={signInAction} type="submit">
          Sign in
        </Button>
      </form>
      <Link href="/forgot-password">
        Forgot Password?
      </Link>

      <p>
        Don&apos;t have an account?{" "}
        <Link href="/sign-up">
          Sign up
        </Link>
      </p>
    </div>
  );
}