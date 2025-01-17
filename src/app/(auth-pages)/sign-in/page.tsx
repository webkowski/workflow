import Link from "next/link";
import { signInAction } from "@/app/actions";
import Button from "@/components/base/button";

export default async function Login() {
  return (
    <div>
      <h1>Sign in</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          placeholder="you@example.com"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          placeholder="Your password"
          type="password"
        />
        <Button
          formAction={signInAction}
          type="submit"
        >
          Sign in
        </Button>
      </form>
      <Link href="/forgot-password">Forgot Password?</Link>
      <p>
        Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
      </p>
    </div>
  );
}
